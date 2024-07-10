import { type InferInsertModel } from "drizzle-orm";
import { type ImagesTable } from "~/libs/database/database.js";

type ImageInsert = InferInsertModel<typeof ImagesTable>;

export { type ImageInsert };
