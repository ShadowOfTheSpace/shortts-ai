import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connection, db } from "./client.js";

try {
  await migrate(db, { migrationsFolder: "src/libs/database/migrations" });
  console.log("Migration completed successfully");
} catch (error) {
  console.log(`Error: ${error}`);
} finally {
  connection.end();
}
