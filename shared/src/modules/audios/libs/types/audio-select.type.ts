import { type InferSelectModel } from "drizzle-orm";
import { type AudiosTable } from "~/libs/database/database.js";

type AudioSelect = InferSelectModel<typeof AudiosTable>;

export { type AudioSelect };
