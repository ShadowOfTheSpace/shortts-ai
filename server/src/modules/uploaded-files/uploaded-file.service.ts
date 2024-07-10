import { type FileUploader } from "~/libs/modules/file-uploader/file-uploader.js";
import { type CreateUploadedFileRequestDto } from "./libs/types/types.js";
import { type UploadedFileRepository } from "./uploaded-file.repository.js";

type Constructor = {
  fileUploader: FileUploader;
  uploadedFileRepository: UploadedFileRepository;
};

class UploadedFileService {
  private fileUploader: FileUploader;
  private uploadedFileRepository: UploadedFileRepository;

  constructor({ fileUploader, uploadedFileRepository }: Constructor) {
    this.fileUploader = fileUploader;
    this.uploadedFileRepository = uploadedFileRepository;
  }

  async create({ filePath, folder, type }: CreateUploadedFileRequestDto) {
    const { assetId, url } = await this.fileUploader.upload(
      filePath,
      folder,
      type
    );

    const createdUploadedFile = await this.uploadedFileRepository.create({
      assetId,
      url,
    });

    if (!createdUploadedFile) {
      throw new Error("Saving uploaded file failed.");
    }

    return createdUploadedFile;
  }
}

export { UploadedFileService };
