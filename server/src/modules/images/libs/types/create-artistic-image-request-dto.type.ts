type CreateArtisticImageRequestDto = {
  prompt: string;
  quality: "HD" | "SD";
  seed: number;
};

export { type CreateArtisticImageRequestDto };
