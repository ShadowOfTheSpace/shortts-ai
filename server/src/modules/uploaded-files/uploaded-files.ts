import { fileUploader } from "~/libs/modules/file-uploader/file-uploader.js";
import { UploadedFileRepository } from "./uploaded-file.repository.js";
import { UploadedFileService } from "./uploaded-file.service.js";

const uploadedFileRepository = new UploadedFileRepository();
const uploadedFileService = new UploadedFileService({
  fileUploader,
  uploadedFileRepository,
});

export { type UploadedFileService } from "./uploaded-file.service.js";
export { uploadedFileService };
