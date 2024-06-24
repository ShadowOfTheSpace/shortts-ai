import { getRandomInteger } from "~/libs/helpers/helpers.js";
import { ZoomPanAnimation } from "../../types/zoom-pan-animation.type.js";
import { getAllZoomPanAnimation } from "../get-all-zoom-pan-animation/get-all-zoom-pan-animation.helpers.js";

const getRandomZoomPanAnimation = (duration: number, frameRate: number) => {
  const zoomPanAnimations = getAllZoomPanAnimation(duration, frameRate);
  const randomIndex = getRandomInteger(0, zoomPanAnimations.length);

  return zoomPanAnimations[randomIndex] as ZoomPanAnimation;
};

export { getRandomZoomPanAnimation };
