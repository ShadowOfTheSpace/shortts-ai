import { hash as bcryptHash } from "bcrypt";
import { type NextRequest, NextResponse } from "next/server";
import { DEFAULT_SALT_ROUNDS } from "~/_libs/constants/constants";
import { AppRoute, CookiesName, HTTPCode } from "~/_libs/enums/enums";
import {
  auth,
  googleAuth,
  GoogleAuthError,
  GoogleAuthErrorMessage,
} from "~/_libs/modules/auth/auth";
import { userDao } from "~/_modules/users/users";
import { getUrlWithQueryParams } from "~/_utils/utils";

const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const cookies = request.cookies;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const storedState = cookies.get(CookiesName.GOOGLE_STATE)?.value ?? null;
  const codeVerifier = cookies.get(CookiesName.GOOGLE_CODE)?.value ?? null;

  try {
    if (
      !code ||
      !state ||
      !storedState ||
      state !== storedState ||
      !codeVerifier
    ) {
      throw new GoogleAuthError(
        AppRoute.SIGN_IN,
        GoogleAuthErrorMessage.AUTHENTICATION_FAILED
      );
    }

    const accessToken = await googleAuth.getAccessToken(code, codeVerifier);
    const googleUser = await googleAuth.getGoogleUser(accessToken);
    const userByEmail = await userDao.getUserByEmail(googleUser.email);

    if (!userByEmail) {
      const randomPassword = crypto.randomUUID();
      const randomPasswordHash = await bcryptHash(
        randomPassword,
        DEFAULT_SALT_ROUNDS
      );

      const createdUser = await userDao.createUser({
        email: googleUser.email,
        passwordHash: randomPasswordHash,
      });

      if (!createdUser) {
        throw new GoogleAuthError(
          AppRoute.SIGN_UP,
          GoogleAuthErrorMessage.REGISTRATION_FAILED
        );
      }

      await auth.createSession(createdUser);
    } else {
      await auth.createSession(userByEmail);
    }

    return new NextResponse(null, {
      status: HTTPCode.REDIRECTED,
      headers: {
        Location: AppRoute.VIDEOS,
      },
    });
  } catch (error: unknown) {
    const isGoogleAuthError = error instanceof GoogleAuthError;

    return new NextResponse(null, {
      status: HTTPCode.REDIRECTED,
      headers: {
        Location: isGoogleAuthError
          ? getUrlWithQueryParams(error.redirectTo, { error: error.message })
          : getUrlWithQueryParams(AppRoute.SIGN_IN, {
              error: GoogleAuthErrorMessage.AUTHENTICATION_UNKNOWN_ERROR,
            }),
      },
    });
  }
};

export { GET };
