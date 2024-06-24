import { FilterName } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  straight: number;
  from: number;
  to: number;
  nameIndex: number;
} & BaseFilter;

const getBlurFilter = ({
  from,
  nameIndex,
  straight,
  to,
  inputName,
  outputName,
}: Properties) => {
  return createFilter({
    input: { name: inputName, nameIndex, isIndexed: true },
    filter: FilterName.BOX_BLUR,
    options: {
      lr: straight,
      enable: `between(t,${from},${to})`,
    },
    output: { name: outputName, nameIndex, isIndexed: true },
  });
};

export { getBlurFilter };
