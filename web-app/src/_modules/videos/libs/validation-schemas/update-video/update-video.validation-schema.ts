import { z } from "zod";

type UpdateVideo = {
  title: z.ZodString;
  caption: z.ZodString;
  hashtags: z.ZodEffects<z.ZodString, string, string>;
  text: z.ZodString;
};

const updateVideo = z.object<UpdateVideo>({
  title: z
    .string()
    .trim()
    .min(10, "Title is too short.")
    .max(100, "Title is too long."),
  caption: z
    .string()
    .trim()
    .min(10, "Caption is too short.")
    .max(200, "Caption is too long."),
  hashtags: z
    .string()
    .trim()
    .refine((value) => {
      return value.split(" ").length <= 25;
    }, "Too much hashtags."),
  text: z
    .string()
    .trim()
    .min(300, "Text is too short.")
    .max(2000, "Text is too long."),
});

export { updateVideo };
