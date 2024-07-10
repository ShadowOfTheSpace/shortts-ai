import { subtitles } from "~/libs/modules/subtitles/subtitles.js";
import { uploadedFileService } from "~/modules/uploaded-files/uploaded-files.js";
import { SubtitlesRepository } from "./subtitles.repository.js";
import { SubtitlesService } from "./subtitles.service.js";

const subtitlesRepository = new SubtitlesRepository();
const subtitlesService = new SubtitlesService({
  subtitles,
  subtitlesRepository,
  uploadedFileService,
});

export { type SubtitlesService } from "./subtitles.service.js";
export { subtitlesService };
