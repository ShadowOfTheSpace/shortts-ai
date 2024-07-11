import { z } from "zod";
import { type CreateVideoRequestDto } from "../types/create-video-request-dto.type.js";

type TCreateVideoRequestDto = {
  id: z.ZodString;
  style: z.ZodType<CreateVideoRequestDto["style"]>;
  quality: z.ZodType<CreateVideoRequestDto["quality"]>;
  colorPalette: z.ZodType<CreateVideoRequestDto["colorPalette"]>;
  voice: z.ZodType<CreateVideoRequestDto["voice"]>;
};

const videoCreate = z.object<TCreateVideoRequestDto>({
  id: z.string().trim().uuid("Id is not valid uuid."),
  style: z.enum(["artistic", "realistic"]),
  quality: z.enum(["HD", "SD"]),
  colorPalette: z.enum([
    "achromatic",
    "bright",
    "cold",
    "dim",
    "multicolored",
    "natural",
    "neon",
    "pastel",
    "vintage",
    "warm",
  ]),
  voice: z.enum(["alloy", "echo", "fable", "onyx", "nova", "shimmer"]),
});

export { videoCreate };
