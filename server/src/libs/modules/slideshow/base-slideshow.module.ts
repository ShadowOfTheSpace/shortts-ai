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
import { type InputImages, type ScreenResolution } from "./libs/types/types.js";

type Properties = {
  audioPath: string;
  debug?: boolean;
  frameRate?: number;
  images: InputImages;
  inputResolution: ScreenResolution;
  onError?: (error: unknown) => void;
  onEnd?: () => void;
  onStart?: (command: string) => void;
  onProgress?: (progress: { frames: number }) => void;
  outputFileName: string;
  outputResolution?: ScreenResolution;
  subtitlesPath: string;
};

class BaseSlideshow {
  public generate(options: Properties) {
    const {
      audioPath,
      images: { durations: imagesDurations, paths: imagesPaths },
      inputResolution,
      debug = false,
      frameRate = DEFAULT_VIDEO_FPS,
      onEnd = () => {},
      onError = () => {},
      onStart = () => {},
      onProgress = () => {},
      outputFileName,
      outputResolution = inputResolution,
      subtitlesPath,
    } = options;

    const hasScalingDown =
      JSON.stringify(outputResolution) !== JSON.stringify(inputResolution);

    const imageCount = imagesPaths.length;

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
              filename: subtitlesPath,
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
          "-crf 18",
        ])
        .on("start", onStart)
        .on("start", (command) => {
          debug && console.log(command);
        })
        .on("progress", onProgress)
        .on("progress", (progress) => {
          debug && console.log(progress);
        })
        .on("end", onEnd)
        .on("error", onError)
        .on("error", (err, stdout, stderr) => {
          debug && console.log(err, stdout, stderr);
        })
        .saveToFile(outputFileName);
    } catch (error: unknown) {
      if (error instanceof Error && !error.message.includes("isStream")) {
        console.error(error);
      }
    }
  }
}

export { BaseSlideshow };
