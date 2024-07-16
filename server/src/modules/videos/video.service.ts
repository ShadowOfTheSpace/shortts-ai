import { mkdirSync, rmdirSync } from "fs";
import { randomInt } from "node:crypto";
import {
  AUDIO_FILENAME,
  SUBTITLES_FILENAME,
  TEMP_FOLDER_NAME,
  VIDEO_FILENAME,
} from "~/libs/constants/constants.js";
import { getTempFilePath } from "~/libs/helpers/helpers.js";
import { type OpenAI } from "~/libs/modules/open-ai/open-ai.js";
import { type Slideshow } from "~/libs/modules/slideshow/slideshow.js";
import { type ImageService } from "~/modules/images/images.js";
import { type AudioService } from "../audios/audio.service.js";
import { SubtitlesService } from "../subtitles/subtitles.service.js";
import {
  DEFAULT_DESCRIPTION,
  MAX_SAFE_INTEGER,
} from "./libs/constants/constants.js";
import { getChatgptPrompt } from "./libs/helpers/helpers.js";
import { imageQualityToScreenResolution } from "./libs/maps/maps.js";
import {
  UpdateVideoRequestDto,
  type ChatgptResponseDto,
  type CreateVideoRequestDto,
} from "./libs/types/types.js";
import { type VideoRepository } from "./video.repository.js";
import { type UploadedFileService } from "../uploaded-files/uploaded-file.service.js";

type Constructor = {
  audioService: AudioService;
  imageService: ImageService;
  openAI: OpenAI;
  slideshow: Slideshow;
  subtitlesService: SubtitlesService;
  uploadedFileService: UploadedFileService;
  videoRepository: VideoRepository;
};

class VideoService {
  private audioService: AudioService;
  private imageService: ImageService;
  private openAI: OpenAI;
  private slideshow: Slideshow;
  private subtitlesService: SubtitlesService;
  private uploadedFileService: UploadedFileService;
  private videoRepository: VideoRepository;

  constructor({
    audioService,
    imageService,
    openAI,
    slideshow,
    subtitlesService,
    uploadedFileService,
    videoRepository,
  }: Constructor) {
    this.audioService = audioService;
    this.imageService = imageService;
    this.openAI = openAI;
    this.slideshow = slideshow;
    this.subtitlesService = subtitlesService;
    this.videoRepository = videoRepository;
    this.uploadedFileService = uploadedFileService;
  }

  async findById(id: string) {
    const videoById = await this.videoRepository.findById(id);

    if (!videoById) {
      throw new Error("Video not found.");
    }

    return videoById;
  }

  async updateTextContentById(
    id: string,
    textContent: Pick<
      UpdateVideoRequestDto,
      "caption" | "hashtags" | "text" | "title"
    >
  ) {
    const updatedVideo = this.videoRepository.updateTextContentById(
      id,
      textContent
    );

    if (!updatedVideo) {
      throw new Error("Updating video text content failed.");
    }

    return updatedVideo;
  }

  public async updateFileIdById(
    id: string,
    fileId: UpdateVideoRequestDto["fileId"]
  ) {
    const updatedVideo = this.videoRepository.updateFileIdById(id, fileId);

    if (!updatedVideo) {
      throw new Error("Updating video fileId failed.");
    }

    return updatedVideo;
  }

  public async updateStatusById(
    id: string,
    status: UpdateVideoRequestDto["status"]
  ) {
    const updatedVideo = this.videoRepository.updateStatusById(id, status);

    if (!updatedVideo) {
      throw new Error("Updating video status failed.");
    }

    return updatedVideo;
  }

  public async create({
    colorPalette,
    quality,
    style,
    id: videoId,
    voice,
  }: CreateVideoRequestDto) {
    const videoById = await this.findById(videoId);

    const directoryPath = `${TEMP_FOLDER_NAME}/${videoId}`;
    const audioPath = getTempFilePath(videoId, AUDIO_FILENAME);
    const subtitlesPath = getTempFilePath(videoId, SUBTITLES_FILENAME);
    const videoPath = getTempFilePath(videoId, VIDEO_FILENAME);

    mkdirSync(directoryPath);
    const seed = randomInt(MAX_SAFE_INTEGER);

    console.log(`${videoId} - generating-text-content`);
    void (await this.updateStatusById(videoId, "generating-text-content"));

    const { systemPrompt, userPrompt } = getChatgptPrompt({
      colorPalette,
      style,
      topic: videoById.topic,
      description: videoById.description ?? DEFAULT_DESCRIPTION,
    });

    const {
      text: textBySentences,
      prompts,
      caption,
      hashtags,
      title,
    } = await this.openAI.callChat<ChatgptResponseDto>(
      systemPrompt,
      userPrompt,
      "json"
    );

    if (prompts.length !== textBySentences.length) {
      rmdirSync(directoryPath);
      console.log("ChatGPT wrong response.");
      console.log(textBySentences);
      console.log(prompts);
      this.create({
        colorPalette,
        quality,
        style,
        id: videoId,
        voice,
      });
      return;
    }

    const text = textBySentences
      .map(({ sentence }) => {
        return sentence;
      })
      .join(" ");

    void (await this.updateTextContentById(videoId, {
      caption,
      hashtags,
      text,
      title,
    }));

    console.log(`${videoId} - generating-audio`);
    void (await this.updateStatusById(videoId, "generating-audio"));

    const { id: audioId } = await this.audioService.generate({
      text,
      videoId,
      voice,
    });

    console.log(`${videoId} - generating-subtitles`);
    void (await this.updateStatusById(videoId, "generating-subtitles"));

    const { id: subtitlesId } = await this.subtitlesService.create({
      audioId,
      quality,
      text,
      videoId,
    });

    const sentencesDurations =
      await this.subtitlesService.getSentencesDurationsById(subtitlesId);

    console.log(`${videoId} - generating-images`);
    void (await this.updateStatusById(videoId, "generating-images"));

    const generatedImages = await Promise.all(
      prompts.map(({ prompt }, index) => {
        return this.imageService.create({
          colorPalette,
          order: index,
          prompt,
          quality: "HD",
          seed,
          style,
          videoId,
        });
      })
    );

    console.log(`${videoId} - rendering`);
    void (await this.updateStatusById(videoId, "rendering"));

    const imagesPaths = generatedImages.map(({ generatedImageUrl }) => {
      return generatedImageUrl;
    });

    this.slideshow.generate({
      audioPath,
      images: {
        durations: sentencesDurations,
        paths: imagesPaths,
      },
      inputResolution: imageQualityToScreenResolution["HD"],
      outputResolution: imageQualityToScreenResolution[quality],
      outputFileName: videoPath,
      subtitlesPath,
      onEnd: async () => {
        const { id: fileId } = await this.uploadedFileService.create({
          filePath: videoPath,
          folder: videoId,
          type: "video",
        });
        void (await this.updateFileIdById(videoId, fileId));
        void (await this.updateStatusById(videoId, "completed"));
        console.log(`${videoId} - completed`);
      },
      debug: true,
    });
  }
}

export { VideoService };
