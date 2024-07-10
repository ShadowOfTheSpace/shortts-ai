import { replicate } from "~/libs/modules/replicate/replicate.js";
import { uploadedFileService } from "~/modules/uploaded-files/uploaded-files.js";
import { ImageRepository } from "./image.repository.js";
import { ImageService } from "./image.service.js";

const imageRepository = new ImageRepository();
const imageService = new ImageService({
  imageRepository,
  replicate,
  uploadedFileService,
});

export { type ImageService } from "./image.service.js";
export { imageService };
