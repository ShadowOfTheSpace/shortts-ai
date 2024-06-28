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
    });
  }
}

export { BaseConfig };
