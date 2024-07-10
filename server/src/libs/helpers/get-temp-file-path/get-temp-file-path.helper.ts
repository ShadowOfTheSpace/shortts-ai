import { TEMP_FOLDER_NAME } from "~/libs/constants/constants.js";

const getTempFilePath = (videoId: string, filename: string) => {
  return `${TEMP_FOLDER_NAME}/${videoId}/${filename}`;
};

export { getTempFilePath };
