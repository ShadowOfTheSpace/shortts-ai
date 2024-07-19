import { AppRoute } from "~/_libs/enums/enums";
import {
  AuthActionLink,
  AuthDivider,
  GoogleOauthForm,
} from "../_libs/components/components";
import { SignInForm } from "./_libs/components/components";

const SignInPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] bg-tertiary shadow-md p-[40px] rounded-[12px]">
      <h2 className="font-bold text-[40px] text-center">Sign In</h2>
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
