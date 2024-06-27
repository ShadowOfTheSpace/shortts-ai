import { readFileSync, writeFileSync } from "fs";
import { parseSync, type Cue } from "subtitle";
import { SUBTITLE_CONFIGURATION } from "./libs/constants/constants.js";
import {
  getMergedRows,
  getMergedRowsLength,
  getRandomSubtitleAnimation,
  getSubtitleRow,
} from "./libs/helpers/helpers.js";
import { type SubtitleRow } from "./libs/types/types.js";

class BaseSubtitles {
  read(path: string): SubtitleRow[] {
    const subtitles = readFileSync(path).toString();

    return parseSync(subtitles)
      .filter((node) => {
        return node.type === "cue";
      })
      .map((node) => {
        const data = node.data as Cue;

        return {
          ...data,
        };
      });
  }

  merge(subtitles: SubtitleRow[], maxLength: number) {
    const newSubtitles: SubtitleRow[] = [];
    let subtitlesRowsToMerge: SubtitleRow[] = [];

    subtitles.forEach((subtitleRow) => {
      const subtitlesWithNewLine = [...subtitlesRowsToMerge, subtitleRow];
      const isLengthAcceptable =
        getMergedRowsLength(subtitlesWithNewLine) <= maxLength;

      if (!isLengthAcceptable) {
        const mergedSubtitles = getMergedRows(subtitlesRowsToMerge);

        newSubtitles.push(mergedSubtitles);
        subtitlesRowsToMerge = [subtitleRow];

        return;
      }
      subtitlesRowsToMerge.push(subtitleRow);
    });

    newSubtitles.push(getMergedRows(subtitlesRowsToMerge));

    return newSubtitles;
  }

  save(subtitles: SubtitleRow[], path: string, hasAnimation: boolean) {
    let outputSubtitles = SUBTITLE_CONFIGURATION;

    subtitles.forEach((subtitleRow, index) => {
      const animation = getRandomSubtitleAnimation();

      outputSubtitles += getSubtitleRow({
        ...subtitleRow,
        animation: index === 0 || !hasAnimation ? null : animation,
      });
    });

    writeFileSync(path, outputSubtitles);
  }
}

export { BaseSubtitles };
