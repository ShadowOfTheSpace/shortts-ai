import { type SubtitleRow } from "../../types/types.js";

const getMergedRowsLength = (rows: SubtitleRow[]) => {
  return rows
    .map(({ text }) => {
      return text;
    })
    .join("")
    .trim().length;
};

export { getMergedRowsLength };
