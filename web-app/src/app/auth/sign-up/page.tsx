import { AppRoute } from "~/libs/enums/enums";
import {
  AuthActionLink,
  AuthDivider,
  GoogleOauthForm,
} from "../libs/components/components";
import { SignUpForm } from "./libs/components/components";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] bg-tertiary shadow-md p-[40px] border rounded-[12px]">
      <h1 className="font-bold text-[40px] text-center">Sign Up</h1>
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
