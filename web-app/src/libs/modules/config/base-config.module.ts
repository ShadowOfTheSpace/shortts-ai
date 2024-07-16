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
      DATABASE: {
        CONNECTION_URL: {
          default: null,
          doc: "Database connection URL",
          env: "DB_CONNECTION_URL",
          format: String,
        },
      },
    });
  }
}

export { BaseConfig };
