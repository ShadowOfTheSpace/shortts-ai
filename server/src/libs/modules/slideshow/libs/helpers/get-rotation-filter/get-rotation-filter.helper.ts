import { getRadians } from "~/libs/helpers/helpers.js";
import { FilterName } from "../../enums/enums.js";
import { type BaseFilter, type ScreenResolution } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  angle: number;
  direction: "anticlockwise" | "clockwise";
  inputResolution: ScreenResolution;
  nameIndex: number;
} & BaseFilter;

const getRotationFilter = ({
  angle,
  direction,
  inputName,
  inputResolution,
  nameIndex,
  outputName,
}: Properties) => {
  const radians = getRadians(direction === "anticlockwise" ? -angle : angle);

  return createFilter({
    input: { name: inputName, nameIndex, isIndexed: true },
    filter: FilterName.ROTATE,
    options: {
      a: `${radians}*t`,
      out_w: inputResolution.width,
      out_h: inputResolution.height,
    },
    output: { name: outputName, nameIndex, isIndexed: true },
  });
};

export { getRotationFilter };
