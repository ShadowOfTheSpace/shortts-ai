import { ImagesTable, db } from "~/libs/database/database.js";
import { type ImageInsert } from "./libs/types/types.js";

class ImageRepository {
  async create({
    colorPalette,
    fileId,
    order,
    prompt,
    quality,
    seed,
    style,
    videoId,
  }: ImageInsert) {
    const [image] = await db
      .insert(ImagesTable)
      .values({
        colorPalette,
        fileId,
        order,
        prompt,
        quality,
        seed,
        style,
        videoId,
      })
      .returning();

    return image ?? null;
  }
}

export { ImageRepository };
