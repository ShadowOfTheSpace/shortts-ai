import { type InferInsertModel } from "drizzle-orm";
import { type UploadedFilesTable } from "~/libs/database/database.js";

type UploadedFileInsert = InferInsertModel<typeof UploadedFilesTable>;

export { type UploadedFileInsert };
