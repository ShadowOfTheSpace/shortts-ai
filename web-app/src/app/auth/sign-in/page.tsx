import { Logo } from "~/_libs/components/components";
import { AppRoute } from "~/_libs/enums/enums";
import {
  AuthActionLink,
  AuthDivider,
  GoogleOauthForm,
} from "../_libs/components/components";
import { SignInForm } from "./_libs/components/components";

const SignInPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] bg-tertiary shadow-md p-[40px] border rounded-[12px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-baloo font-bold text-[40px] text-center">
          Sign In
        </h1>
        <Logo className="w-[118px] h-[40px] shrink-0" />
      </div>
      <SignInForm />
      <AuthDivider />
      <GoogleOauthForm />
      <AuthActionLink
        description="Don’t have an account?"
        iconName="sparkles"
        href={AppRoute.SIGN_UP}
        text="Sign up"
      />
    </div>
  );
};

export default SignInPage;
