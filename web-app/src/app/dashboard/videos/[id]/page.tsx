import { redirect } from "next/navigation";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";
import { usersVideosDao } from "~/_modules/users-videos/users-videos.server-only";
import { checkIfUuidIsValid } from "~/_utils/utils";
import { VideoManagementPreview } from "./_libs/components/components";

type Properties = {
  params: { id: string };
};

const VideoPage: React.FC<Properties> = async ({ params: { id } }) => {
  const user = await auth.getCurrentUser();

  if (!user) {
    redirect(AppRoute.SIGN_IN);
  }

  if (!checkIfUuidIsValid(id)) {
    redirect(AppRoute.VIDEOS);
  }

  const usersVideos = await usersVideosDao.findVideoByIdAndUserId(id, user.id);

  if (!usersVideos) {
    redirect(AppRoute.VIDEOS);
  }

  return (
    <div className="flex justify-center items-center min-h-[100dvh] grow">
      <div className="flex bg-tertiary shadow-md p-[40px] rounded-[12px] basis-[1000px]">
        <VideoManagementPreview video={usersVideos.video} />
      </div>
    </div>
  );
};

export default VideoPage;
