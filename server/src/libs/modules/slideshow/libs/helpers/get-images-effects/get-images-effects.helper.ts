import { getRandomFloat } from "~/libs/helpers/helpers.js";
import { FilterIOName, RotationAngle, VideoSize } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { getBlurFilter } from "../get-blur-filter/get-blur-filter.helper.js";
import { getRandomZoomPanAnimation } from "../get-random-zoom-pan-animation/get-random-zoom-pan-animation.helper.js";
import { getRotatedImageSize } from "../get-rotated-image-size/get-rotated-image-size.helper.js";
import { getRotationFilter } from "../get-rotation-filter/get-rotation-filter.helper.js";
import { getZoomPanFilter } from "../get-zoom-pan-filter/get-zoom-pan-filter.helper.js";

type Properties = {
  imagesDurations: number[];
  frameRate: number;
} & BaseFilter;

const getImagesEffects = ({
  imagesDurations,
  inputName,
  frameRate,
  outputName,
}: Properties) => {
  return imagesDurations.flatMap((duration, index) => {
    const animation = getRandomZoomPanAnimation(duration, frameRate);

    const hasZoomAnimation = animation.title.includes("zoom");

    const angle = hasZoomAnimation
      ? getRandomFloat(RotationAngle.MIN, RotationAngle.MAX)
      : RotationAngle.NONE;

    const isLeftZoom = animation.title.includes("left");

    const { height, width } = getRotatedImageSize(
      VideoSize.WIDTH,
      VideoSize.HEIGHT,
      angle * duration
    );

    return [
      getZoomPanFilter({
        animation,
        duration,
        frameRate,
        nameIndex: index,
        outputSize: {
          width,
          height,
        },
        inputName,
        outputName: FilterIOName.ZOOMED,
      }),
      getRotationFilter({
        angle,
        direction: isLeftZoom ? "clockwise" : "anticlockwise",
        nameIndex: index,
        inputName: FilterIOName.ZOOMED,
        outputName: FilterIOName.ROTATED,
      }),
      getBlurFilter({
        from: 0,
        to: 0.04,
        nameIndex: index,
        straight: 15,
        inputName: FilterIOName.ROTATED,
        outputName: FilterIOName.BLURRED,
      }),
      getBlurFilter({
        from: 0.04,
        to: 0.08,
        nameIndex: index,
        straight: 7,
        inputName: FilterIOName.BLURRED,
        outputName,
      }),
    ];
  });
};

export { getImagesEffects };
