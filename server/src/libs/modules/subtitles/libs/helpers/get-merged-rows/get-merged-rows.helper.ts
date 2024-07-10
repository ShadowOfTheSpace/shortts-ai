import { type SubtitleRow } from "../../types/types.js";

const getMergedRows = (subtitleRows: SubtitleRow[]): SubtitleRow => {
  const newStart = subtitleRows[0]?.start;
  const newEnd = subtitleRows[subtitleRows.length - 1]?.end;

  if (newStart === undefined || newEnd === undefined) {
    throw new Error("Incorrect merging subtitles");
  }

  const newText = subtitleRows
    .map(({ text }) => {
      return text.trim();
    })
    .join(" ")
    .trim();

  return {
    start: newStart,
    end: newEnd,
    text: newText,
  };
};

export { getMergedRows };
