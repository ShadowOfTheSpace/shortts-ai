import { Google } from "arctic";
import { userDao } from "~/modules/users/users";
import { config } from "../config/config";
import { token } from "../token/token";
import { BaseAuth } from "./base-auth.module";
import { GoogleAuth } from "./google-auth.module";

const google = new Google(
  config.ENV.GOOGLE.CLIENT_ID,
  config.ENV.GOOGLE.CLIENT_SECRET,
  config.ENV.GOOGLE.CALLBACK_URL
);

const googleAuth = new GoogleAuth(google);

const auth = new BaseAuth({
  config,
  token,
  userDao,
});

export { GoogleAuthErrorMessage } from "./libs/enums/enums";
export { GoogleAuthError } from "./libs/exceptions/exceptions";
export { auth, googleAuth };
