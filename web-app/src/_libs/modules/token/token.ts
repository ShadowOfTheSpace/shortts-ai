import { config } from "../config/config";
import { BaseToken } from "./base-token.module";
import { type TokenPayload } from "./libs/types/types";

const token = new BaseToken<TokenPayload>({
  algorithm: config.ENV.JWT.ALGORITHM,
  expiresIn: config.ENV.JWT.EXPIRES_IN,
  secret: Buffer.from(config.ENV.JWT.SECRET, "utf8"),
});

export { type BaseToken as Token } from "./base-token.module";
export { type TokenPayload } from "./libs/types/types";
export { token };
