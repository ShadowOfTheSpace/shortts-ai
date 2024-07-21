"use server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";
import { type ActionErrorState } from "~/_libs/types/types";
import { usersVideosDao } from "~/_modules/users-videos/users-videos.server-only";
import { createVideoValidationSchema } from "~/_modules/videos/videos";
import { videosDao } from "~/_modules/videos/videos.server-only";
import { formatValidationError } from "~/_utils/utils";

const createVideo = async (
  _error: ActionErrorState,
  formData: FormData
): Promise<ActionErrorState> => {
  const parsedCreateVideoParameters = parseWithZod(formData, {
    schema: createVideoValidationSchema,
  });

  if (parsedCreateVideoParameters.status !== "success") {
    const errors = parsedCreateVideoParameters.error;
    return errors
      ? formatValidationError(errors)
      : ["Invalid video creation parameters."];
  }

  const { colorPalette, style, topic, voice } =
    parsedCreateVideoParameters.value;

  const createdVideo = await videosDao.create(topic);
  if (!createdVideo) {
    return ["Video creation failed."];
  }

  try {
    void (await videosDao.generate({
      colorPalette,
      id: createdVideo.id,
      style,
      quality: "HD",
      voice,
    }));
  } catch (error: unknown) {
    return ["Video creation failed."];
  }

  const user = await auth.getCurrentUser();

  if (!user) {
    return ["Video creation failed."];
  }

  try {
    void (await usersVideosDao.assignVideoToUser(createdVideo.id, user.id));
  } catch (error: unknown) {
    return ["Video creation failed."];
  }

  redirect(`${AppRoute.VIDEOS}/${createdVideo.id}`);
};

export { createVideo };
