import { redirect } from "next/navigation";
import { AppRoute } from "~/libs/enums/enums";
import { auth } from "~/libs/modules/auth/auth";

type Properties = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Properties> = async ({ children }) => {
  const user = await auth.getCurrentUser();

  if (user) {
    redirect(AppRoute.VIDEOS);
  }

  return (
    <div className="flex justify-center items-center bg-background w-full h-[100dvh]">
      {children}
    </div>
  );
};

export default AuthLayout;
