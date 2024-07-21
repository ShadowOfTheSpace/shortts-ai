import { type ValueOf } from "~/_libs/types/types";
import { type VideoDto } from "~/_modules/videos/videos";
import { ProgressStatusDescription } from "../../enums/enums";

const progressStatusToDescription: Record<
  VideoDto["status"],
  ValueOf<typeof ProgressStatusDescription>
> = {
  completed: ProgressStatusDescription.COMPLETED,
  "generating-audio": ProgressStatusDescription.GENERATING_AUDIO,
  "generating-images": ProgressStatusDescription.GENERATING_IMAGES,
  "generating-subtitles": ProgressStatusDescription.GENERATING_SUBTITLES,
  "generating-text-content": ProgressStatusDescription.GENERATING_TEXT_CONTENT,
  "in-queue": ProgressStatusDescription.IN_QUEUE,
  rendering: ProgressStatusDescription.RENDERING,
};

export { progressStatusToDescription };
