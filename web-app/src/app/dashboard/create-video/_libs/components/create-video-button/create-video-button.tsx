"use client";
import { useFormStatus } from "react-dom";
import { Button } from "~/_libs/components/components";

const CreateVideoButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      label="Create"
      iconName="sparkles"
      className="mt-[20px]"
      isLoading={pending}
    />
  );
};

export { CreateVideoButton };
