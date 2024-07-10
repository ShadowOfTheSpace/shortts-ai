import { type SubtitlesTable } from "~/libs/database/database.js";
import { type InferSelectModel } from "drizzle-orm";

type SubtitlesSelect = InferSelectModel<typeof SubtitlesTable>;

export { type SubtitlesSelect };
