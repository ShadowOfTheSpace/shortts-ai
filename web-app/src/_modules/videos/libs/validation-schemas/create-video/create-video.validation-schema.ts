import { z } from "zod";
import {
  COLOR_PALETTES,
  STYLES,
  TOPICS,
  VOICES,
} from "../../constants/constants";

type CreateVideo = {
  colorPalette: z.ZodEnum<[...typeof COLOR_PALETTES]>;
  style: z.ZodEnum<[...typeof STYLES]>;
  topic: z.ZodEnum<[...typeof TOPICS]>;
  voice: z.ZodEnum<[...typeof VOICES]>;
};

const createVideoErrorMapCreator = (fieldName: string): z.ZodErrorMap => {
  return (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
      return { message: `${fieldName} is required.` };
    }
    if (issue.code === z.ZodIssueCode.invalid_enum_value) {
      return { message: `${fieldName} invalid enum value.` };
    }

    return { message: ctx.defaultError };
  };
};

const createVideo = z.object<CreateVideo>({
  topic: z.enum(TOPICS, {
    errorMap: createVideoErrorMapCreator("Topic"),
  }),
  style: z.enum(STYLES, {
    errorMap: createVideoErrorMapCreator("Style"),
  }),
  colorPalette: z.enum(COLOR_PALETTES, {
    errorMap: createVideoErrorMapCreator("Color palette"),
  }),
  voice: z.enum(VOICES, { errorMap: createVideoErrorMapCreator("Voice") }),
});

export { createVideo };
