import { redirect } from "next/navigation";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";

const BillingPage: React.FC = async () => {
  const user = await auth.getCurrentUser();

  if (!user) {
    redirect(AppRoute.SIGN_IN);
  }

  return <></>;
};

export default BillingPage;
