import { db, UsersVideosTable } from "~/_libs/database/database";

class UsersVideosDao {
  async assignVideoToUser(videoId: string, userId: string) {
    const [assignedVideo] = await db
      .insert(UsersVideosTable)
      .values({
        userId,
        videoId,
      })
      .returning();

    return assignedVideo ?? null;
  }
}

export { UsersVideosDao };
