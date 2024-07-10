import { type SubtitlesTable } from "~/libs/database/database.js";
import { type InferInsertModel } from "drizzle-orm";

type SubtitlesInsert = InferInsertModel<typeof SubtitlesTable>;

export { type SubtitlesInsert };
