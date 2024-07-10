import { AUDIO_FILENAME } from "~/libs/constants/constants.js";
import { getTempFilePath } from "~/libs/helpers/helpers.js";
import { type OpenAI } from "~/libs/modules/open-ai/open-ai.js";
import { type UploadedFileService } from "~/modules/uploaded-files/uploaded-file.service.js";
import { type AudioRepository } from "./audio.repository.js";
import { type CreateAudioRequestDto } from "./libs/types/types.js";

type Constructor = {
  audioRepository: AudioRepository;
  openAI: OpenAI;
  uploadedFileService: UploadedFileService;
};

class AudioService {
  private audioRepository: AudioRepository;
  private openAI: OpenAI;
  private uploadedFileService: UploadedFileService;

  public constructor({
    audioRepository,
    openAI,
    uploadedFileService,
  }: Constructor) {
    this.audioRepository = audioRepository;
    this.openAI = openAI;
    this.uploadedFileService = uploadedFileService;
  }

  async findById(id: string) {
    const audioById = await this.audioRepository.findById(id);

    if (!audioById) {
      throw new Error("Audio not found.");
    }

    return audioById;
  }

  async generate({ text, videoId, voice }: CreateAudioRequestDto) {
    const audioPath = getTempFilePath(videoId, AUDIO_FILENAME);

    await this.openAI.callVoice(`${text} [pause]`, voice, audioPath);

    const { id: fileId } = await this.uploadedFileService.create({
      filePath: audioPath,
      folder: videoId,
      type: "raw",
    });

    const createdAudio = await this.audioRepository.create({
      fileId,
      videoId,
      voice,
    });

    if (!createdAudio) {
      throw new Error("Saving audio failed.");
    }

    return createdAudio;
  }
}

export { AudioService };
