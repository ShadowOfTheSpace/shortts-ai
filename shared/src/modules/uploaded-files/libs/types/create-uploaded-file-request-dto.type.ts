type CreateUploadedFileRequestDto = {
  filePath: string;
  folder: string;
  type: "image" | "raw" | "video";
};

export { type CreateUploadedFileRequestDto };
