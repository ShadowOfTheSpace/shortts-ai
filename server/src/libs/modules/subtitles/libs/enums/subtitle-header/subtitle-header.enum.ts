import { VideoSize } from "../../enums/enums.js";

const SubtitleHeader = {
  SCRIPT_INFO: `PlayResX: ${VideoSize.OUTPUT_WIDTH}\nPlayResY: ${VideoSize.OUTPUT_HEIGHT}\nScaledBorderAndShadow: no`,
  FORMAT:
    "Format: Name, Fontname, Fontsize, Shadow, Outline, PrimaryColour, SecondaryColour, Alignment",
  STYLE:
    "Style: Default, Baloo 2 ExtraBold, 50, 0, 4, &H00FFFFFF, &H000000FF, 5",
    EVENTS:"Format: Style, Start, End, Text"
} as const;

export { SubtitleHeader };
