import { getRandomInteger } from "~/libs/helpers/helpers.js";
import { SUBTITLE_ANIMATIONS } from "../../constants/constants.js";

const getRandomSubtitleAnimation = () => {
  const randomIndex = getRandomInteger(0, SUBTITLE_ANIMATIONS.length);

  return SUBTITLE_ANIMATIONS[randomIndex] as string;
};

export { getRandomSubtitleAnimation };
