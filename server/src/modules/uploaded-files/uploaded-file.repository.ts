import { db, UploadedFilesTable } from "~/libs/database/database.js";
import { type UploadedFileInsert } from "./libs/types/types.js";

class UploadedFileRepository {
  async create({ assetId, url }: UploadedFileInsert) {
    const [createdUploadedFile] = await db
      .insert(UploadedFilesTable)
      .values({
        assetId,
        url,
      })
      .returning();

    return createdUploadedFile ?? null;
  }
}

export { UploadedFileRepository };
