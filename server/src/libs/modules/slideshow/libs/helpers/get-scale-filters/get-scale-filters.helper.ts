import { FilterName } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  count: number;
} & BaseFilter;

const getScaleFilters = ({ count, inputName, outputName }: Properties) => {
  return new Array(count).fill(count).map((_, nameIndex) => {
    return createFilter({
      filter: FilterName.SCALE,
      input: { name: inputName, nameIndex, isIndexed: true },
      options: {
        width: 8000,
        height: -1,
      },
      output: { name: outputName, nameIndex, isIndexed: true },
    });
  });
};

export { getScaleFilters };
