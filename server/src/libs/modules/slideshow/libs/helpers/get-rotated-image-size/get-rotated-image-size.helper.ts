import { getRadians } from "~/libs/helpers/helpers.js";

const getRotatedImageSize = (width: number, height: number, angle: number) => {
  const radians = getRadians(angle);

  const newWidth =
    Math.abs(width * Math.cos(radians)) + Math.abs(height * Math.sin(radians));

  const newHeight =
    Math.abs(height * Math.cos(radians)) + Math.abs(width * Math.sin(radians));

  return {
    width: Math.round(newWidth),
    height: Math.round(newHeight),
  };
};

export { getRotatedImageSize };
