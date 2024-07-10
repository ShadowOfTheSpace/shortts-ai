import { writeFile } from "fs/promises";
import { OpenAI as LibraryOpenAI } from "openai";

type Properties = {
  chatModel: string;
  openAI: LibraryOpenAI;
  voiceModel: string;
};

class BaseOpenAI {
  private chatModel: string;
  private openAI: LibraryOpenAI;
  private voiceModel: string;

  public constructor({ chatModel, openAI, voiceModel }: Properties) {
    this.chatModel = chatModel;
    this.openAI = openAI;
    this.voiceModel = voiceModel;
  }

  async callVoice(
    text: string,
    voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer",
    outputFileName: string
  ) {
    const response = await this.openAI.audio.speech.create({
      response_format: "wav",
      input: text,
      model: this.voiceModel,
      voice,
    });

    const arrayBuffer = await response.arrayBuffer();

    await writeFile(outputFileName, Buffer.from(arrayBuffer));
  }

  async callChat<T = string>(
    systemPrompt: string,
    userPrompt: string,
    responseFormat: "text" | "json" = "text"
  ) {
    const gptResult = await this.openAI.chat.completions.create({
      model: this.chatModel,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format: {
        type: responseFormat === "json" ? "json_object" : "text",
      },
    });

    const [choice] = gptResult.choices;
    const message = choice?.message.content;

    if (!choice || !message) {
      throw new Error("Wrong response from OpenAI.");
    }

    return responseFormat === "text"
      ? (message as T)
      : (JSON.parse(message) as T);
  }
}

export { BaseOpenAI };
