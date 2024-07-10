import { replicate } from "../replicate/replicate.js";
import { BaseSubtitles } from "./base-subtitles.module.js";

const subtitles = new BaseSubtitles(replicate);

export { BaseSubtitles as Subtitles } from "./base-subtitles.module.js";
export { subtitles };
