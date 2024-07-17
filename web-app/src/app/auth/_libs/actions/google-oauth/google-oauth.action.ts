"use server";
import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CookiesName } from "~/_libs/enums/enums";
import { googleAuth } from "~/_libs/modules/auth/auth";

const googleOauth = async () => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const redirectUrl = await googleAuth.getAuthorizationUrl(state, codeVerifier);

  cookies().set(CookiesName.GOOGLE_STATE, state, {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
  });

  cookies().set(CookiesName.GOOGLE_CODE, codeVerifier, {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
  });

  redirect(redirectUrl);
};

export { googleOauth };
