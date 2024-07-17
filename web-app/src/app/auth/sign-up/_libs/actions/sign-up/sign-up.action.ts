"use server";
import { parseWithZod } from "@conform-to/zod";
import { hash as bcryptHash } from "bcrypt";
import { redirect } from "next/navigation";
import { DEFAULT_SALT_ROUNDS } from "~/_libs/constants/constants";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";
import { type ActionErrorState } from "~/_libs/types/types";
import { userDao } from "~/_modules/users/users";
import { userAuthValidationSchema } from "~/_modules/users/users.client";
import { formatValidationError } from "~/_utils/utils";

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
