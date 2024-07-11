import { type InferSelectModel } from "drizzle-orm";
import { type VideosTable } from "~/libs/database/database.js";

type VideoSelect = InferSelectModel<typeof VideosTable>;

export { type VideoSelect };
