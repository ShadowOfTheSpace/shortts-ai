import { openAI } from "~/libs/modules/open-ai/open-ai.js";
import { uploadedFileService } from "~/modules/uploaded-files/uploaded-files.js";
import { AudioRepository } from "./audio.repository.js";
import { AudioService } from "./audio.service.js";

const audioRepository = new AudioRepository();
const audioService = new AudioService({
  audioRepository,
  openAI,
  uploadedFileService,
});

export { type AudioService } from "./audio.service.js";
export { audioRepository, audioService };
