import { readFileSync, writeFileSync } from "fs";
import { parseSync, type Cue } from "subtitle";
import { ReplicateModel, type Replicate } from "../replicate/replicate.js";
import {
  checkIfHasEndingSign,
  getMergedRows,
  getMergedRowsLength,
  getRandomSubtitleAnimation,
  getSentencesCount,
  getSubtitleConfiguration,
  getSubtitleRow,
  getWordsCount,
} from "./libs/helpers/helpers.js";
import {
  type ScreenResolution,
  type SubtitleRow,
  type TranscribeReplicateResponse,
} from "./libs/types/types.js";

class BaseSubtitles {
  private replicate: Replicate;

  public constructor(replicate: Replicate) {
    this.replicate = replicate;
  }

  async create(audioPath: string, correctText: string): Promise<SubtitleRow[]> {
    const file = readFileSync(audioPath);
    const replicateResponse = await this.replicate.run<string>(
      ReplicateModel.STABLE_TS,
      { audio_path: file, regroup: false, demucs: true, vad: true }
    );

    const { segments, text: transcribedText } = JSON.parse(
      replicateResponse
    ) as TranscribeReplicateResponse;

    const wordsTimestamps = this.concatDividedWords(
      segments.flatMap((segment) => {
        return segment.words.map(({ end, start, word }) => {
          return { end, start, text: word };
        });
      })
    );

    const correctSentencesCount = getSentencesCount(correctText);
    const transcribedSentencesCount = getSentencesCount(transcribedText);
    const correctWordsCount = getWordsCount(correctText);
    const transcribedWordsCount = getWordsCount(transcribedText);

    const hasSameSentencesCount =
      correctSentencesCount === transcribedSentencesCount;
    const hasSameWordsCount = correctWordsCount === transcribedWordsCount;

    if (!hasSameSentencesCount && !hasSameWordsCount) {
      console.log(correctText);
      console.log("__________________________");
      console.log(transcribedText);
      console.log("__________________________");
      console.log(wordsTimestamps);
      throw new Error("Incorrect transcription by Replicate.");
    }

    const hasSameSentenceCountAndNotSameWordsCount =
      hasSameSentencesCount && !hasSameWordsCount;

    const correctWords = correctText.split(" ");

    const result = wordsTimestamps.map(
      ({ end, start, text }, index): SubtitleRow => {
        return {
          end,
          start,
          text: hasSameSentenceCountAndNotSameWordsCount
            ? text
            : ` ${correctWords[index]}`,
        };
      }
    );

    return result;
  }

  getSentencesDuration(subtitles: SubtitleRow[]) {
    const endTimes: number[] = [];

    subtitles.forEach(({ end, text }) => {
      if (/[.!?]/gm.test(text)) {
        endTimes.push(end);
      }
    });

    return endTimes.map((timeMs, index, array) => {
      const previousTime = index === 0 ? 0 : (array[index - 1] as number);
      return timeMs - previousTime + 0.2;
    });
  }

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

  private concatDividedWords(subtitles: SubtitleRow[]) {
    const concatenatedWords: SubtitleRow[] = [];

    for (let i = 0; i < subtitles.length - 1; ) {
      const currentWord = subtitles[i] as SubtitleRow;
      const nextWord = subtitles[i + 1] as SubtitleRow;

      if (nextWord.text[0] === "-") {
        concatenatedWords.push({
          end: nextWord.end,
          start: currentWord.start,
          text: currentWord.text + nextWord.text,
        });
        i += 2;
      } else {
        concatenatedWords.push(currentWord);
        i++;
      }
    }

    concatenatedWords.push(subtitles.at(-1) as SubtitleRow);

    return concatenatedWords;
  }

  merge(subtitles: SubtitleRow[], maxLength: number) {
    const newSubtitles: SubtitleRow[] = [];
    let subtitlesRowsToMerge: SubtitleRow[] = [];

    subtitles.forEach((subtitleRow) => {
      const subtitlesWithNewLine = [...subtitlesRowsToMerge, subtitleRow];
      const isLengthAcceptable =
        getMergedRowsLength(subtitlesWithNewLine) <= maxLength;

      const hasEndingSign = checkIfHasEndingSign(subtitlesRowsToMerge);

      if (!isLengthAcceptable || hasEndingSign) {
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

  save({
    path,
    screenResolution,
    subtitles,
    subtitleSize,
    hasAnimation = true,
  }: {
    path: string;
    screenResolution: ScreenResolution;
    subtitles: SubtitleRow[];
    subtitleSize: "md" | "lg";
    hasAnimation?: boolean;
  }) {
    let outputSubtitles = getSubtitleConfiguration({
      ...screenResolution,
      subtitleSize,
    });

    subtitles.forEach((subtitleRow, index) => {
      const animation = getRandomSubtitleAnimation();

      const { end, start, text } = subtitleRow;

      outputSubtitles += getSubtitleRow({
        end: index === subtitles.length - 1 ? end + 0.5 : end,
        start,
        text,
        animation: index === 0 || !hasAnimation ? null : animation,
      });
    });

    writeFileSync(path, outputSubtitles);
  }
}

export { BaseSubtitles };
