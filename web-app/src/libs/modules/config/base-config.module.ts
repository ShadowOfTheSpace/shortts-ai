import convict, { type Config as LibraryConfig } from "convict";
import { config } from "dotenv";

import { type Config, type EnvironmentSchema } from "./libs/types/types";

class BaseConfig implements Config {
  public ENV: EnvironmentSchema;

  public constructor() {
    config();

    this.envSchema.load({});
    this.envSchema.validate({
      allowed: "strict",
      output: (message) => {
        console.log(message);
      },
    });

    this.ENV = this.envSchema.getProperties();
    console.log(".env file found and successfully parsed.");
  }

  private get envSchema(): LibraryConfig<EnvironmentSchema> {
    return convict<EnvironmentSchema>({
      APP: {
        ENVIRONMENT: {
          default: null,
          doc: "Application environment",
          env: "NEXT_APP_ENV",
          format: String,
        },
      },
      DATABASE: {
        CONNECTION_URL: {
          default: null,
          doc: "Database connection URL",
          env: "DB_CONNECTION_URL",
          format: String,
        },
      },
      GOOGLE: {
        CALLBACK_URL: {
          default: null,
          doc: "Google callback url",
          env: "GOOGLE_CALLBACK_URL",
          format: String,
        },
        CLIENT_ID: {
          default: null,
          doc: "Google client id",
          env: "GOOGLE_CLIENT_ID",
          format: String,
        },
        CLIENT_SECRET: {
          default: null,
          doc: "Google client secret",
          env: "GOOGLE_CLIENT_SECRET",
          format: String,
        },
      },
      JWT: {
        ALGORITHM: {
          default: null,
          doc: "Algorithm for token generation",
          env: "JWT_TOKEN_ALGORITHM",
          format: String,
        },
        EXPIRES_IN: {
          default: null,
          doc: "Token expiration time",
          env: "JWT_TOKEN_EXPIRES_IN",
          format: String,
        },
        SECRET: {
          default: null,
          doc: "Secret key for token generation",
          env: "JWT_SECRET_KEY",
          format: String,
        },
      },
    });
  }
}

export { BaseConfig };
