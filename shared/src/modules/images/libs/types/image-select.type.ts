import { type InferSelectModel } from "drizzle-orm";
import { type ImagesTable } from "~/libs/database/database.js";

type ImageSelect = InferSelectModel<typeof ImagesTable>;

export { type ImageSelect };
