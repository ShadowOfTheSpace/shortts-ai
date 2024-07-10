import { type InferInsertModel } from "drizzle-orm";
import { type AudiosTable } from "~/libs/database/database.js";

type AudioInsert = InferInsertModel<typeof AudiosTable>;

export { type AudioInsert };
