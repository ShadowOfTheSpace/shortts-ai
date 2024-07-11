import { type AudioInsert, type ImageInsert } from "./types.js";

type CreateVideoRequestDto = {
  id: string;
  style: ImageInsert["style"];
  colorPalette: ImageInsert["colorPalette"];
  quality: ImageInsert["quality"];
  voice: AudioInsert["voice"];
};

export { type CreateVideoRequestDto };
