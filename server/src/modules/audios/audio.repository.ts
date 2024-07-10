import { AudiosTable, db, eq } from "~/libs/database/database.js";
import { type AudioInsert } from "./libs/types/types.js";

class AudioRepository {
  async findById(id: string) {
    const audioById = await db.query.AudiosTable.findFirst({
      where: (table) => {
        return eq(table.id, id);
      },
      with: {
        file: true,
        subtitles: true,
      },
    });

    return audioById ?? null;
  }

  async create({ fileId, videoId, voice }: AudioInsert) {
    const [createdAudio] = await db
      .insert(AudiosTable)
      .values({
        fileId,
        videoId,
        voice,
      })
      .returning();

    return createdAudio ?? null;
  }
}

export { AudioRepository };
