import { userDao } from "~/modules/users/users";
import { config } from "../config/config";
import { token } from "../token/token";
import { BaseAuth } from "./base-auth.module";
const auth = new BaseAuth({
  config,
  token,
  userDao,
});

export { auth };
