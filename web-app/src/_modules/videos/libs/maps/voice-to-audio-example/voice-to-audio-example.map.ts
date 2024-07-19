import { type ValueOfArray } from "~/_libs/types/types";
import { type VOICES } from "../../constants/constants";

const voiceToAudioExample: Record<ValueOfArray<typeof VOICES>, string> = {
  alloy: "/audios/nova-example.mp3",
  echo: "/audios/echo-example.mp3",
  fable: "/audios/fable-example.mp3",
  nova: "/audios/nova-example.mp3",
  onyx: "/audios/onyx-example.mp3",
  shimmer: "/audios/shimmer-example.mp3",
};

export { voiceToAudioExample };
