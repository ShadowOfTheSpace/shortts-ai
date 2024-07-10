import { type ScreenResolution } from "~/libs/types/types.js";

const imageQualityToScreenResolution: Record<"HD" | "SD", ScreenResolution> = {
  HD: { height: 1344, width: 768 },
  SD: { height: 848, width: 480 },
} as const;

export { imageQualityToScreenResolution };
