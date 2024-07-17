import { redirect } from "next/navigation";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";
import { Sidebar } from "./_libs/components/components";

type Properties = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Properties> = async ({ children }) => {
  const user = await auth.getCurrentUser();

  if (!user) {
    redirect(AppRoute.SIGN_IN);
  }

  return (
    <div className="flex bg-background min-h-[100dvh]">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
