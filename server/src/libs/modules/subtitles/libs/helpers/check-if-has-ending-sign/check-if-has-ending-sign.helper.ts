import { type SubtitleRow } from "../../types/types.js";

const checkIfHasEndingSign = (rows: SubtitleRow[]) => {
  const text = rows
    .map(({ text }) => {
      return text;
    })
    .join();

  return /[.!?]/gm.test(text);
};

export { checkIfHasEndingSign };
