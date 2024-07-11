import {
  CHATGPT_EXAMPLE,
  CHATGPT_INSTRUCTIONS,
} from "../../constants/constants.js";
import { type CreateVideoRequestDto } from "../../types/types.js";

const getChatgptPrompt = (options: {
  description: string;
  colorPalette: CreateVideoRequestDto["colorPalette"];
  style: CreateVideoRequestDto["style"];
  topic: string;
}) => {
  const { colorPalette, description, style, topic } = options;

  const systemPrompt = `
  ${CHATGPT_INSTRUCTIONS}
  ${CHATGPT_EXAMPLE}
  ` as const;

  const userPrompt = `
  Topic: ${topic};
  Description: ${description};
  Color palette: ${colorPalette};
  Style: ${style};
  ` as const;

  return { systemPrompt, userPrompt };
};

export { getChatgptPrompt };
