const PROGRESS_STATUSES = [
  "in-queue",
  "generating-text-content",
  "generating-audio",
  "generating-subtitles",
  "generating-images",
  "rendering",
  "completed",
] as const;

export { PROGRESS_STATUSES };
