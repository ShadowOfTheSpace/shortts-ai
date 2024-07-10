import { OpenAI as LibraryOpenAI } from "openai";
import { config } from "../config/config.js";
import { BaseOpenAI } from "./base-open-ai.module.js";

const libraryOpenAI = new LibraryOpenAI({
  apiKey: config.ENV.OPEN_AI.API_KEY,
});

const openAI = new BaseOpenAI({
  chatModel: config.ENV.OPEN_AI.CHAT_MODEL,
  openAI: libraryOpenAI,
  voiceModel: config.ENV.OPEN_AI.VOICE_MODEL,
});

export { type BaseOpenAI as OpenAI } from "./base-open-ai.module.js";
export { openAI };
