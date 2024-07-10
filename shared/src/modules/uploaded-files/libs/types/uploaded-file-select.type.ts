import { type InferSelectModel } from "drizzle-orm";
import { type UploadedFilesTable } from "~/libs/database/database.js";

type UploadedFileSelect = InferSelectModel<typeof UploadedFilesTable>;

export { type UploadedFileSelect };
