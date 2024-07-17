"use server";
import { cookies } from "next/headers";
import { cache } from "react";
import { CookiesName } from "~/_libs/enums/enums";
import { type UserDto } from "~/modules/users/libs/types/types";
import { UserDao } from "~/modules/users/user-dao";
import { type Config } from "../config/config";
import { type Token, type TokenPayload } from "../token/token";
import { COOKIES_AUTH_MAX_AGE } from "./libs/constants/constants";

type Constructor = {
  config: Config;
  token: Token<TokenPayload>;
  userDao: UserDao;
};

class BaseAuth {
  private config: Config;
  private token: Token<TokenPayload>;
  private userDao: UserDao;

  constructor({ config, token, userDao }: Constructor) {
    this.config = config;
    this.token = token;
    this.userDao = userDao;
  }

  async createSession({ id }: UserDto) {
    const createdToken = await this.token.create({ userId: id });

    cookies().set(CookiesName.AUTH, createdToken, {
      httpOnly: true,
      secure: this.config.ENV.APP.ENVIRONMENT === "production",
      maxAge: COOKIES_AUTH_MAX_AGE,
    });
  }

  getCurrentUser = cache(async () => {
    const authCookie = cookies().get(CookiesName.AUTH);

    if (!authCookie) {
      return null;
    }

    const { value: jwt } = authCookie;

    try {
      const {
        payload: { userId },
      } = await this.token.verify(jwt);

      return await this.userDao.getUserById(userId);
    } catch (error: unknown) {
      return null;
    }
  });
}

export { BaseAuth };
