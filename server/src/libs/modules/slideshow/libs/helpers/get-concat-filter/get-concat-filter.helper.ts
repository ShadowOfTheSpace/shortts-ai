import { FilterName } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = { imageCount: number } & BaseFilter;

const getConcatFilter = ({ imageCount, inputName, outputName }: Properties) => {
  return [
    createFilter({
      input: { name: inputName, count: imageCount, isIndexed: true },
      filter: FilterName.CONCAT,
      options: {
        n: imageCount,
      },
      output: { name: outputName },
    }),
  ];
};

export { getConcatFilter };
