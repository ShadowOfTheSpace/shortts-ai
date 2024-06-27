import { SubtitleHeader } from "../../enums/enums.js";

const SUBTITLE_CONFIGURATION =
  `[Script Info]\n${SubtitleHeader.SCRIPT_INFO}\n[V4+ Styles]\n${SubtitleHeader.FORMAT}\n${SubtitleHeader.STYLE}\n[Events]\n${SubtitleHeader.EVENTS}\n` as const;

export { SUBTITLE_CONFIGURATION };
