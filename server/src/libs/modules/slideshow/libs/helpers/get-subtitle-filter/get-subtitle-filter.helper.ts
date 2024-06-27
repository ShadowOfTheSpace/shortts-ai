import { FilterName } from "../../enums/enums.js";
import { BaseFilter } from "../../types/types.js";
import { createFilter } from "../helpers.js";

type Properties = {
  filename: string;
} & BaseFilter;

const getSubtitleFilter = ({ filename, inputName, outputName }: Properties) => {
  return [
    createFilter({
      input: { name: inputName },
      filter: FilterName.SUBTITLES,
      options: {
        filename: `'${filename.replaceAll("\\", "\\\\").replace(":", "\\:")}'`,
        fontsdir: "'src\\\\assets\\\\fonts'",
      },
      output: { name: outputName },
    }),
  ];
};

export { getSubtitleFilter };
