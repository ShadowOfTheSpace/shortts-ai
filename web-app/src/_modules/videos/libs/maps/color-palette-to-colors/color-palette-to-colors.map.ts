import { type ValueOfArray } from "~/_libs/types/types";
import { type COLOR_PALETTES } from "../../constants/constants";

const colorPaletteToColors: Record<
  ValueOfArray<typeof COLOR_PALETTES>,
  string[]
> = {
  achromatic: ["#000000", "#FFFFFF", "#808080", "#A9A9A9"],
  bright: ["#FEED59", "#FF96C6", "#8DD7C0", "#01A5E4"],
  cold: ["#313694", "#74ACD2", "#4575B6", "#ABD9E9"],
  dim: ["#4B0082", "#7F7967", "#2F4F4F", "#90584E"],
  multicolored: ["#FE2712", "#F9BC02", "#3E01A4", "#66B132"],
  natural: ["#527462", "#9FB45B", "#3A887C", "#C0C49B"],
  neon: ["#C04DFF", "#24DFFE", "#FF00AA", "#D1E603"],
  pastel: ["#FBB39A", "#C5E2BA", "#CEB4D9", "#F6F19F"],
  vintage: ["#B88368", "#DFC279", "#AC624C", "#D2B48C"],
  warm: ["#D82F29", "#FDAE61", "#F56D43", "#FFDE91"],
};

export { colorPaletteToColors };
