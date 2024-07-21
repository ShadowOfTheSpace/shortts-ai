import { type IconName } from "~/_libs/types/types";
import { type VideoDto } from "~/_modules/videos/videos";

const progressStatusToIconName: Record<VideoDto["status"], IconName> = {
  completed: "check",
  "generating-audio": "audioLines",
  "generating-images": "images",
  "generating-subtitles": "comment",
  "generating-text-content": "scrollText",
  "in-queue": "hourglass",
  rendering: "film",
};

export { progressStatusToIconName };
