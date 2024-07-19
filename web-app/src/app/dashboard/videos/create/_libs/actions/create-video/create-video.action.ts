"use server";
import { parseWithZod } from "@conform-to/zod";
import { type ActionErrorState } from "~/_libs/types/types";
import { createVideoValidationSchema } from "~/_modules/videos/videos";
import { formatValidationError } from "~/_utils/utils";

const createVideo = async (
  _error: ActionErrorState,
  formData: FormData
): Promise<ActionErrorState> => {
  const parsedUserSignIn = parseWithZod(formData, {
    schema: createVideoValidationSchema,
  });

  if (parsedUserSignIn.status !== "success") {
    const errors = parsedUserSignIn.error;
    return errors ? formatValidationError(errors) : ["Video creation failed."];
  }

  return null;
};

export { createVideo };
