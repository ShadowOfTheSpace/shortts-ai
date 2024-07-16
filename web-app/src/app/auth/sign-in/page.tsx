import { AppRoute } from "~/libs/enums/enums";
import {
  AuthActionLink,
  AuthDivider,
  GoogleOauthForm,
} from "../libs/components/components";
import { SignInForm } from "./libs/components/components";

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] bg-tertiary shadow-md p-[40px] border rounded-[12px]">
      <h1 className="font-bold text-[40px] text-center">Sign In</h1>
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

export default SignIn;
