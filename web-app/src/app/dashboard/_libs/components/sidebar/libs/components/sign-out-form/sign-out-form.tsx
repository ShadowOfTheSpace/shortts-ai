import { signOut } from "../../actions/actions";
import { SignOutButton } from "../sign-out-button/sign-out-button";

type Properties = {
  className?: string;
};

const SignOutForm: React.FC<Properties> = ({ className }) => {
  return (
    <form action={signOut} className={className}>
      <SignOutButton />
    </form>
  );
};

export { SignOutForm };
