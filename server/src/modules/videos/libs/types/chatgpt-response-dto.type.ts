type ChatgptResponseDto = {
  title: string;
  caption: string;
  hashtags: string[];
  text: {
    sentence: string;
    index: number;
  }[];
  prompts: {
    prompt: string;
    index: number;
  }[];
};

export { type ChatgptResponseDto };
