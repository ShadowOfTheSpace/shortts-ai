import { db, VideosTable } from "~/_libs/database/database";
import { type CreateVideoRequestDto } from "./libs/types/types";

class VideosDao {
  async create(topic: string) {
    const [createdVideo] = await db
      .insert(VideosTable)
      .values({
        topic,
      })
      .returning();

    return createdVideo ?? null;
  }

  async generate(options: CreateVideoRequestDto) {
    const response = await fetch("http://localhost:3001/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      throw new Error();
    }
  }
}

export { VideosDao };
