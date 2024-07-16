import { useFormStatus } from "react-dom";
import { Button } from "~/libs/components/components";

const SignInButton: React.FC = () => {
  const { pending } = useFormStatus();

  return <Button label="Sign in" isLoading={pending} />;
};

export { SignInButton };
