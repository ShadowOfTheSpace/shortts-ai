import { redirect } from "next/navigation";
import { AppRoute } from "~/libs/enums/enums";
import { auth } from "~/libs/modules/auth/auth";

const VideosPage: React.FC = async () => {
  const user = await auth.getCurrentUser();

  if (!user) {
    redirect(AppRoute.SIGN_IN);
  }

  return <></>;
};

export default VideosPage;
