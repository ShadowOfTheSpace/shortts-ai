import { type ImageInsert } from "./image-insert.type.js";

type CreateImageRequestDto = {
  colorPalette: ImageInsert["colorPalette"];
  order: number;
  prompt: string;
  quality: ImageInsert["quality"];
  seed: number;
  style: ImageInsert["style"];
  videoId: string;
};

export { type CreateImageRequestDto };
