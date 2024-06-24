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
        force_style:
          "Alignment=10,Fontname=Baloo 2 ExtraBold,Fontsize=20,Outline=5,ScaledBorderAndShadow=no",
        fontsdir: "'src\\\\assets\\\\fonts'",
      },
      output: { name: outputName },
    }),
  ];
};

export { getSubtitleFilter };
