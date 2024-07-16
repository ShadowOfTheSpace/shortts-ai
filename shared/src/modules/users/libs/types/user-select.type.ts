import { type InferSelectModel } from "drizzle-orm";
import { type UsersTable } from "~/libs/database/database.js";

type UserSelect = InferSelectModel<typeof UsersTable>;

export { type UserSelect };
