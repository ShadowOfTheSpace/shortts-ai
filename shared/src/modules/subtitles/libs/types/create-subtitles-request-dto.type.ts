import { type ImageInsert } from "~/modules/images/images.js";

type CreateSubtitlesRequestDto = {
  audioId: string;
  quality: ImageInsert["quality"];
  text: string;
  videoId: string;
};

export { type CreateSubtitlesRequestDto };
