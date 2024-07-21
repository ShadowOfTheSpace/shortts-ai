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
    <div className="flex flex-col items-center gap-[20px] bg-tertiary shadow-md p-[20px] sm:p-[40px] sm:rounded-[12px] w-full sm:w-auto h-full sm:h-auto max-h-[100dvh] overflow-x-hidden overflow-y-auto">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-[30px] sm:gap-y-0 w-full">
        <h2 className="order-2 sm:order-1 font-baloo font-bold text-[40px] text-center self-start sm:self-auto">
          Sign Up
        </h2>
        <Logo className="order-1 sm:order-2 w-[118px] h-[40px] self-end sm:self-auto shrink-0" />
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
