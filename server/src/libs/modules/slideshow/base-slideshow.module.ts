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
import { type InputImage, type ScreenResolution } from "./libs/types/types.js";

type Properties = {
  audioPath: string;
  frameRate?: number;
  images: InputImage[];
  inputResolution: ScreenResolution;
  onError?: (error: unknown) => void;
  onEnd?: () => void;
  onStart?: (command: string) => void;
  onProgress?: (progress: { frames: number }) => void;
  outputFileName: string;
  outputResolution?: ScreenResolution;
  subtitlePath: string;
};

class BaseSlideshow {
  public generate(options: Properties) {
    const {
      audioPath,
      images,
      inputResolution,
      frameRate = DEFAULT_VIDEO_FPS,
      onEnd = () => {},
      onError = () => {},
      onStart = () => {},
      onProgress = () => {},
      outputFileName,
      outputResolution = inputResolution,
      subtitlePath,
    } = options;

    const hasScalingDown = outputResolution !== inputResolution;

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
              outputName: FilterIOName.SCALED_UP,
              width: 3000,
              height: -1,
            }),
            getImagesEffects({
              imagesDurations,
              inputName: FilterIOName.SCALED_UP,
              frameRate,
              outputName: FilterIOName.WITH_EFFECTS,
              inputResolution,
            }),
            hasScalingDown
              ? getScaleFilters({
                  count: imageCount,
                  inputName: FilterIOName.WITH_EFFECTS,
                  outputName: FilterIOName.SCALED_DOWN,
                  width: outputResolution.width,
                  height: outputResolution.height,
                })
              : [],
            getConcatFilter({
              imageCount,
              inputName: hasScalingDown
                ? FilterIOName.SCALED_DOWN
                : FilterIOName.WITH_EFFECTS,
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
          "-vcodec libx265",
          "-preset fast",
          "-crf 14",
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
