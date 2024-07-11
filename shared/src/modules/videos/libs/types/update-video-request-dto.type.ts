import { type VideoSelect } from "./video-select.type.js";

type UpdateVideoRequestDto = {
  caption: string;
  fileId: string;
  hashtags: string[];
  status: VideoSelect["status"];
  text: string;
  title: string;
};

export { type UpdateVideoRequestDto };
