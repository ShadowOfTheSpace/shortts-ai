import { type ScreenResolution } from "../../types/types.js";

const getSubtitleConfiguration = ({
  height,
  width,
  subtitleSize,
}: ScreenResolution & { subtitleSize: "lg" | "md" }) => {
  const fontSize = subtitleSize === "lg" ? 80 : 55;

  return `
[Script Info]
PlayResX: ${width}
PlayResY: ${height}
ScaledBorderAndShadow: no
[V4+ Styles]
Format: Name, Fontname, Fontsize, Shadow, Outline, PrimaryColour, SecondaryColour, Alignment
Style: Default, Baloo 2 ExtraBold, ${fontSize}, 0, 4, &H00FFFFFF, &H000000FF, 5
[Events]
Format: Style, Start, End, Text\n`;
};

export { getSubtitleConfiguration };
