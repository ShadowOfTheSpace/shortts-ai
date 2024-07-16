"use server";
import { parseWithZod } from "@conform-to/zod";
import { hash as bcryptHash } from "bcrypt";
import { redirect } from "next/navigation";
import { DEFAULT_SALT_ROUNDS } from "~/libs/constants/constants";
import { AppRoute } from "~/libs/enums/enums";
import { auth } from "~/libs/modules/auth/auth";
import { type ActionErrorState } from "~/libs/types/types";
import { userDao } from "~/modules/users/users";
import { userAuthValidationSchema } from "~/modules/users/users.client";
import { formatValidationError } from "~/utils/utils";

const signUp = async (
  _error: ActionErrorState,
  formData: FormData
): Promise<ActionErrorState> => {
  const parsedUserSignIn = parseWithZod(formData, {
    schema: userAuthValidationSchema,
  });

  if (parsedUserSignIn.status !== "success") {
    const errors = parsedUserSignIn.error;
    return errors ? formatValidationError(errors) : ["Registration failed."];
  }

  const { email, password } = parsedUserSignIn.value;

  const userByEmail = await userDao.getUserByEmail(email);

  if (userByEmail) {
    return ["Email already used."];
  }

  const passwordHash = await bcryptHash(password, DEFAULT_SALT_ROUNDS);

  const createdUser = await userDao.createUser({
    email,
    passwordHash,
  });

  if (!createdUser) {
    return ["Registration failed."];
  }

  await auth.createSession(createdUser);

  redirect(AppRoute.VIDEOS);
};

export { signUp };
