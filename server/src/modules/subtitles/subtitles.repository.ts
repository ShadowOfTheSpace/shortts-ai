import { type SubtitlesInsert } from "./libs/types/types.js";
import { db, eq, SubtitlesTable } from "~/libs/database/database.js";

class SubtitlesRepository {
  async create({ audioId, fileId, rows }: SubtitlesInsert) {
    const [createdSubtitles] = await db
      .insert(SubtitlesTable)
      .values({
        audioId,
        fileId,
        rows,
      })
      .returning();

    return createdSubtitles ?? null;
  }

  async findById(id: string) {
    const subtitlesById = await db.query.SubtitlesTable.findFirst({
      where: (subtitles) => {
        return eq(subtitles.id, id);
      },
    });

    return subtitlesById ?? null;
  }
}

export { SubtitlesRepository };
