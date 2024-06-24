import ffmpeg from "fluent-ffmpeg";
import { DEFAULT_VIDEO_FPS } from "./libs/constants/constants.js";
import { FilterIOName } from "./libs/enums/enums.js";
import {
  getConcatFilter,
  getFlattenFilters,
  getImagesEffects,
  getInputFileOption,
  getScaleFilters,
  getSubtitleFilter,
} from "./libs/helpers/helpers.js";
import { InputImage } from "./libs/types/types.js";

type Properties = {
  audioPath: string;
  frameRate?: number;
  images: InputImage[];
  onError?: (error: unknown) => void;
  onEnd?: () => void;
  onStart?: (command: string) => void;
  onProgress?: (progress: { frames: number }) => void;
  outputFileName: string;
  subtitlePath: string;
};

class BaseSlideshow {
  public generate(options: Properties) {
    const {
      audioPath,
      images,
      frameRate = DEFAULT_VIDEO_FPS,
      onEnd = () => {},
      onError = () => {},
      onStart = () => {},
      onProgress = () => {},
      outputFileName,
      subtitlePath,
    } = options;

    const imagesPaths = images.map(({ path }) => {
      return path;
    });

    const imagesDurations = images.map(({ duration }) => {
      return duration;
    });

    const imageCount = images.length;

    try {
      ffmpeg()
        .addOptions([...imagesPaths, audioPath].map(getInputFileOption))
        .complexFilter(
          getFlattenFilters(
            getScaleFilters({
              count: imageCount,
              inputName: FilterIOName.DEFAULT,
              outputName: FilterIOName.SCALED,
            }),
            getImagesEffects({
              imagesDurations,
              inputName: FilterIOName.SCALED,
              frameRate,
              outputName: FilterIOName.WITH_EFFECTS,
            }),
            getConcatFilter({
              imageCount,
              inputName: FilterIOName.WITH_EFFECTS,
              outputName: FilterIOName.CONCATENATED,
            }),
            getSubtitleFilter({
              filename: subtitlePath,
              inputName: FilterIOName.CONCATENATED,
              outputName: FilterIOName.WITH_SUBTITLES,
            })
          )
        )
        .map(FilterIOName.WITH_SUBTITLES)
        .outputOptions([
          `-map ${imageCount}:a`,
          "-pix_fmt yuv420p",
          "-shortest",
          "-preset veryslow",
          "-crf 8",
        ])
        .on("start", onStart)
        .on("progress", onProgress)
        .on("end", onEnd)
        .on("error", onError)
        .saveToFile(outputFileName);
    } catch (error: unknown) {
      if (error instanceof Error && !error.message.includes("isStream")) {
        console.error(error);
      }
    }
  }
}

export { BaseSlideshow };
