import { type InferInsertModel } from "drizzle-orm";
import { type VideosTable } from "~/libs/database/database.js";

type VideoInsert = InferInsertModel<typeof VideosTable>;

export { type VideoInsert };
