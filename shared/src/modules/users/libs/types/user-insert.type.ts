import { type InferInsertModel } from "drizzle-orm";
import { type UsersTable } from "~/libs/database/database.js";

type UserInsert = InferInsertModel<typeof UsersTable>;

export { type UserInsert };
