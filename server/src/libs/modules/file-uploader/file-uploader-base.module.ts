import { type Cloudinary } from "./libs/types/types.js";

class FileUploaderBase {
  private cloudinary: Cloudinary;

  public constructor(cloudinary: Cloudinary) {
    this.cloudinary = cloudinary;
  }

  async upload(
    fileUrl: string,
    folder: string = "",
    type: "image" | "video" | "raw"
  ) {
    const response = await this.cloudinary.uploader.upload(fileUrl, {
      resource_type: type,
      folder,
    });

    return {
      assetId: response["asset_id"] as string,
      url: response.secure_url,
    };
  }
}

export { FileUploaderBase };
