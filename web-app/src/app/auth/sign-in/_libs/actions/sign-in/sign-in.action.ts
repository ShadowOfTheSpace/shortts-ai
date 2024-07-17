"use server";
import { parseWithZod } from "@conform-to/zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";
import { type ActionErrorState } from "~/_libs/types/types";
import { formatValidationError } from "~/_utils/utils";
import { userDao } from "~/modules/users/users";
import { userAuthValidationSchema } from "~/modules/users/users.client";

const signIn = async (
  _error: ActionErrorState,
  formData: FormData
): Promise<ActionErrorState> => {
  const parsedUserSignIn = parseWithZod(formData, {
    schema: userAuthValidationSchema,
  });

  if (parsedUserSignIn.status !== "success") {
    const errors = parsedUserSignIn.error;
    return errors ? formatValidationError(errors) : ["Authentication failed."];
  }

  const { email, password } = parsedUserSignIn.value;

  const userByEmail = await userDao.getUserByEmail(email);

  if (!userByEmail) {
    return ["Invalid credentials."];
  }

  const hasSamePassword = await bcrypt.compare(
    password,
    userByEmail.passwordHash
  );

  if (!hasSamePassword) {
    return ["Invalid credentials."];
  }

  await auth.createSession(userByEmail);

  redirect(AppRoute.VIDEOS);
};

export { signIn };
