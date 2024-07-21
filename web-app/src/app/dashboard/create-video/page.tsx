import { redirect } from "next/navigation";
import { AppRoute } from "~/_libs/enums/enums";
import { auth } from "~/_libs/modules/auth/auth";
import { CreateVideoForm } from "./_libs/components/components";

const CreateVideoPage: React.FC = async () => {
  const user = await auth.getCurrentUser();

  if (!user) {
    redirect(AppRoute.SIGN_IN);
  }

  return (
    <div className="flex justify-center items-center w-full min-h-[100dvh]">
      <div className="flex flex-col gap-[20px] bg-tertiary shadow-md p-[40px] rounded-[12px]">
        <h2 className="font-baloo font-bold text-[40px] text-center">
          Create New Video
        </h2>
        <CreateVideoForm />
      </div>
    </div>
  );
};

export default CreateVideoPage;
