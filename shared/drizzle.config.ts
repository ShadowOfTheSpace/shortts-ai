import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config();

const config = defineConfig({
  schema: "src/libs/database/schema/schema.ts",
  out: "src/libs/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env["DB_CONNECTION_URL"] as string,
  },
});

export default config;
