import { FilterName } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  count: number;
  height: number;
  width: number;
} & BaseFilter;

const getScaleFilters = ({
  count,
  inputName,
  height,
  outputName,
  width,
}: Properties) => {
  return new Array(count).fill(count).map((_, nameIndex) => {
    return createFilter({
      filter: FilterName.SCALE,
      input: { name: inputName, nameIndex, isIndexed: true },
      options: {
        width,
        height,
      },
      output: { name: outputName, nameIndex, isIndexed: true },
    });
  });
};

export { getScaleFilters };
