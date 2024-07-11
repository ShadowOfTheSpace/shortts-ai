import { openAI } from "~/libs/modules/open-ai/open-ai.js";
import { slideshow } from "~/libs/modules/slideshow/slideshow.js";
import { audioService } from "~/modules/audios/audios.js";
import { imageService } from "~/modules/images/images.js";
import { subtitlesService } from "~/modules/subtitles/subtitles.js";
import { uploadedFileService } from "~/modules/uploaded-files/uploaded-files.js";
import { VideoRepository } from "./video.repository.js";
import { VideoService } from "./video.service.js";
import { VideoController } from "./video.controller.js";

const videoRepository = new VideoRepository();

const videoService = new VideoService({
  audioService,
  imageService,
  openAI,
  slideshow,
  subtitlesService,
  uploadedFileService,
  videoRepository,
});

const videoController = new VideoController(videoService);

export { videoController };
