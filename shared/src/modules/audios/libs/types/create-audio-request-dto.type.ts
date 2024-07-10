import { type AudioInsert } from "./audio-insert.type.js";

type CreateAudioRequestDto = {
  text: string;
  videoId: string;
  voice: AudioInsert["voice"];
};

export { type CreateAudioRequestDto };
