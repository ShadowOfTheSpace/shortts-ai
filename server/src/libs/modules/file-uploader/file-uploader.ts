import libraryCloudinary from "cloudinary";
import { config } from "../config/config.js";
import { FileUploaderBase } from "./file-uploader-base.module.js";

libraryCloudinary.v2.config({
  api_key: config.ENV.CLOUDINARY.API_KEY,
  api_secret: config.ENV.CLOUDINARY.API_SECRET,
  cloud_name: config.ENV.CLOUDINARY.CLOUD_NAME,
});

const fileUploader = new FileUploaderBase(libraryCloudinary.v2);

export { type FileUploaderBase as FileUploader } from "./file-uploader-base.module.js";
export { fileUploader };
