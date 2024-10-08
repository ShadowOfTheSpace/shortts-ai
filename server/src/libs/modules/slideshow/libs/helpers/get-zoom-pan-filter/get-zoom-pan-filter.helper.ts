import { FilterName } from "../../enums/enums.js";
import { BaseFilter, ZoomPanAnimation } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  animation: ZoomPanAnimation;
  duration: number;
  frameRate: number;
  outputSize: {
    width: number;
    height: number;
  };
  nameIndex: number;
} & BaseFilter;

const getZoomPanFilter = ({
  animation: { x, y, zoom },
  duration,
  frameRate,
  outputSize,
  nameIndex,
  inputName,
  outputName,
}: Properties) => {
  return createFilter({
    filter: FilterName.ZOOM_PAN,
    input: { name: inputName, nameIndex, isIndexed: true },
    options: {
      x,
      y,
      zoom,
      fps: frameRate,
      d: duration * frameRate,
      s: `${outputSize.width}x${outputSize.height}`,
    },
    output: { name: outputName, nameIndex, isIndexed: true },
  });
};

export { getZoomPanFilter };
