import { getRadians } from "~/libs/helpers/helpers.js";
import { FilterName, VideoSize } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  angle: number;
  direction: "anticlockwise" | "clockwise";
  nameIndex: number;
} & BaseFilter;

const getRotationFilter = ({
  angle,
  direction,
  nameIndex,
  inputName,
  outputName,
}: Properties) => {
  const radians = getRadians(direction === "anticlockwise" ? -angle : angle);

  return createFilter({
    input: { name: inputName, nameIndex, isIndexed: true },
    filter: FilterName.ROTATE,
    options: {
      a: `${radians}*t`,
      out_w: VideoSize.INPUT_WIDTH,
      out_h: VideoSize.INPUT_HEIGHT,
    },
    output: { name: outputName, nameIndex, isIndexed: true },
  });
};

export { getRotationFilter };
