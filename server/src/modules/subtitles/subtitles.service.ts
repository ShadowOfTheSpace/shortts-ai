import {
  AUDIO_FILENAME,
  SUBTITLES_FILENAME,
} from "~/libs/constants/constants.js";
import { getTempFilePath } from "~/libs/helpers/helpers.js";
import { type Subtitles } from "~/libs/modules/subtitles/subtitles.js";
import { type UploadedFileService } from "../uploaded-files/uploaded-files.js";
import { imageQualityToScreenResolution } from "./libs/maps/maps.js";
import {
  type CreateSubtitlesRequestDto,
  type SubtitleRow,
} from "./libs/types/types.js";
import { type SubtitlesRepository } from "./subtitles.repository.js";

type Constructor = {
  subtitles: Subtitles;
  subtitlesRepository: SubtitlesRepository;
  uploadedFileService: UploadedFileService;
};

class SubtitlesService {
  private subtitles: Subtitles;
  private subtitlesRepository: SubtitlesRepository;
  private uploadedFileService: UploadedFileService;

  public constructor({
    subtitles,
    subtitlesRepository,
    uploadedFileService,
  }: Constructor) {
    this.uploadedFileService = uploadedFileService;
    this.subtitles = subtitles;
    this.subtitlesRepository = subtitlesRepository;
  }

  async create({ audioId, quality, text, videoId }: CreateSubtitlesRequestDto) {
    const audioPath = getTempFilePath(videoId, AUDIO_FILENAME);
    const subtitlesPath = getTempFilePath(videoId, SUBTITLES_FILENAME);

    const subtitles = await this.subtitles
      .create(audioPath, text)
      .then((unmergedSubtitles) => {
        return this.subtitles.merge(unmergedSubtitles, 22);
      });

    this.subtitles.save({
      path: subtitlesPath,
      screenResolution: imageQualityToScreenResolution[quality],
      subtitles,
      subtitleSize: quality === "HD" ? "lg" : "md",
      hasAnimation: true,
    });

    const { id: fileId } = await this.uploadedFileService.create({
      filePath: audioPath,
      folder: videoId,
      type: "raw",
    });

    const createdSubtitles = await this.subtitlesRepository.create({
      audioId,
      fileId,
      rows: subtitles,
    });

    if (!createdSubtitles) {
      throw new Error("Saving subtitles failed.");
    }

    return createdSubtitles;
  }

  async findById(id: string) {
    const subtitlesById = await this.subtitlesRepository.findById(id);

    if (!subtitlesById) {
      throw new Error("Subtitles not found.");
    }

    return subtitlesById;
  }

  async getSentencesDurationsById(id: string) {
    const { rows: subtitles } = await this.findById(id);

    return this.subtitles.getSentencesDuration(subtitles as SubtitleRow[]);
  }
}

export { SubtitlesService };
