import { useFormStatus } from "react-dom";
import { Button } from "~/_libs/components/components";

const SignInButton: React.FC = () => {
  const { pending } = useFormStatus();

  return <Button label="Sign in" isLoading={pending} />;
};

export { SignInButton };
