import { SubtitleRow } from "../../types/subtitle-row.type.js";

const getMergedRowsLength = (rows: SubtitleRow[]) => {
  return rows
    .map(({ text }) => {
      return text;
    })
    .join(" ")
    .trim().length;
};

export { getMergedRowsLength };
