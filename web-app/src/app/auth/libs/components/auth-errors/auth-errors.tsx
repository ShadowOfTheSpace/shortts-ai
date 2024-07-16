"use client";
import { useFormStatus } from "react-dom";
import { Icon } from "~/libs/components/components";

type Properties = {
  errors: string[];
};

const AuthErrors: React.FC<Properties> = ({ errors }) => {
  const { pending } = useFormStatus();

  if (pending) {
    return null;
  }

  return (
    <div className="flex items-center gap-[15px] bg-error/20 mb-[15px] p-[10px] rounded-[6px] text-[12px] text-error">
      <Icon name="alert" />
      <div className="flex flex-col">
        {errors.map((error, index) => {
          return <p key={index}>{error}</p>;
        })}
      </div>
    </div>
  );
};

export { AuthErrors };
