import convict, { type Config as LibraryConfig } from "convict";
import { config } from "dotenv";

import { type Config, type EnvironmentSchema } from "./libs/types/types.js";

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
        HOST: {
          default: null,
          doc: "Host for server app",
          env: "HOST",
          format: String,
        },
        PORT: {
          default: null,
          doc: "Port for incoming connections",
          env: "PORT",
          format: Number,
        },
      },
      CLOUDINARY: {
        API_KEY: {
          default: null,
          doc: "Cloudinary api key",
          env: "CLOUDINARY_API_KEY",
          format: String,
        },
        API_SECRET: {
          default: null,
          doc: "Cloudinary api secret",
          env: "CLOUDINARY_API_SECRET",
          format: String,
        },
        CLOUD_NAME: {
          default: null,
          doc: "Cloudinary cloud name",
          env: "CLOUDINARY_CLOUD_NAME",
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
      OPEN_AI: {
        API_KEY: {
          default: null,
          doc: "OpenAI api key",
          env: "OPEN_AI_API_KEY",
          format: String,
        },
        CHAT_MODEL: {
          default: null,
          doc: "OpenAI chat model",
          env: "OPEN_AI_CHAT_MODEL",
          format: String,
        },
        VOICE_MODEL: {
          default: null,
          doc: "OpenAI voice model",
          env: "OPEN_AI_VOICE_MODEL",
          format: String,
        },
      },
      REPLICATE: {
        API_KEY: {
          default: null,
          doc: "Replicate api key",
          env: "REPLICATE_API_KEY",
          format: String,
        },
      },
    });
  }
}

export { BaseConfig };
