import { and, db, eq, UsersVideosTable } from "~/_libs/database/database";

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

  async findVideoByIdAndUserId(id: string, userId: string) {
    const videoByIdAndUserId = await db.query.UsersVideosTable.findFirst({
      where: (usersVideos) => {
        return and(eq(usersVideos.videoId, id), eq(usersVideos.userId, userId));
      },
      with: {
        video: {
          with: {
            file: true,
          },
        },
      },
    });

    return videoByIdAndUserId ?? null;
  }
}

export { UsersVideosDao };
