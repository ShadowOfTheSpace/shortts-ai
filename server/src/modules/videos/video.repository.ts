import { VideosTable, db, eq } from "~/libs/database/database.js";
import { type UpdateVideoRequestDto } from "./libs/types/types.js";

class VideoRepository {
  async findById(id: string) {
    const videoById = await db.query.VideosTable.findFirst({
      where: (video) => {
        return eq(video.id, id);
      },
    });

    return videoById ?? null;
  }

  async updateTextContentById(
    id: string,
    {
      caption,
      hashtags,
      text,
      title,
    }: Pick<UpdateVideoRequestDto, "caption" | "hashtags" | "text" | "title">
  ) {
    const [updatedVideo] = await db
      .update(VideosTable)
      .set({ caption, hashtags, text, title })
      .where(eq(VideosTable.id, id))
      .returning();

    return updatedVideo ?? null;
  }

  async updateFileIdById(id: string, fileId: UpdateVideoRequestDto["fileId"]) {
    const [updatedVideo] = await db
      .update(VideosTable)
      .set({ fileId })
      .where(eq(VideosTable.id, id))
      .returning();

    return updatedVideo ?? null;
  }

  async updateStatusById(id: string, status: UpdateVideoRequestDto["status"]) {
    const [updatedVideo] = await db
      .update(VideosTable)
      .set({ status })
      .where(eq(VideosTable.id, id))
      .returning();

    return updatedVideo ?? null;
  }
}

export { VideoRepository };
