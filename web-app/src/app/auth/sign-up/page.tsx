import { Logo } from "~/_libs/components/components";
import { AppRoute } from "~/_libs/enums/enums";
import {
  AuthActionLink,
  AuthDivider,
  GoogleOauthForm,
} from "../_libs/components/components";
import { SignUpForm } from "./_libs/components/components";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] bg-tertiary shadow-md p-[40px] border rounded-[12px]">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-baloo font-bold text-[40px] text-center">
          Sign Up
        </h2>
        <Logo className="w-[118px] h-[40px] shrink-0" />
      </div>
      <SignUpForm />
      <AuthDivider />
      <GoogleOauthForm />
      <AuthActionLink
        description="Already have an account?"
        iconName="sparkles"
        href={AppRoute.SIGN_IN}
        text="Sign in"
      />
    </div>
  );
};

export default SignUpPage;
