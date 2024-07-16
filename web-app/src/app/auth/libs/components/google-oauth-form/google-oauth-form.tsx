import { Button } from "~/libs/components/components";
import { googleOauth } from "../../actions/actions";

const GoogleOauthForm: React.FC = () => {
  return (
    <form action={googleOauth} className="w-full">
      <Button label="Continue with Google" iconName="chrome" />
    </form>
  );
};

export { GoogleOauthForm };
