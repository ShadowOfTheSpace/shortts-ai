type TranscribeReplicateResponse = {
  text: string;
  segments: {
    words: {
      end: number;
      start: number;
      word: string;
    }[];
  }[];
};

export { type TranscribeReplicateResponse };
