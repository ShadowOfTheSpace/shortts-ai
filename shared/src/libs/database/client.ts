import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/schema.js";

dotenv.config();

const postgresClient = postgres(process.env["DB_CONNECTION_URL"] as string);

const db = drizzle(postgresClient, { schema });

export { db, postgresClient as connection };
