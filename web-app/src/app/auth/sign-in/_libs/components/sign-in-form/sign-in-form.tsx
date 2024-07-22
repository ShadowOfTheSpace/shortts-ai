"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useFormState } from "react-dom";
import { FormErrors, IconButton, Input } from "~/_libs/components/components";
import { ActionErrorState } from "~/_libs/types/types";
import { userAuthValidationSchema } from "~/_modules/users/users";
import { signIn } from "../../actions/actions";
import { SignInButton } from "../sign-in-button/sign-in-button";

const SignInForm: React.FC = () => {
  const searchParams = useSearchParams();
  const errorFromUrl = searchParams.get("error");

  const [errors, action] = useFormState<ActionErrorState, FormData>(
    signIn,
    errorFromUrl ? [errorFromUrl] : null
  );

  const [form, fields] = useForm({
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: userAuthValidationSchema });
    },
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevPasswordVisibility) => {
      return !prevPasswordVisibility;
    });
  }, []);

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="flex flex-col gap-[5px] w-full sm:w-[400px]"
    >
      <Input
        placeholder="Enter your email"
        label="Email"
        defaultValue={fields.email.initialValue}
        key={fields.email.key}
        name={fields.email.name}
        errors={fields.email.errors}
      />
      <div className="relative">
        <Input
          placeholder="Enter your password"
          label="Password"
          defaultValue={fields.password.initialValue}
          key={fields.password.key}
          name={fields.password.name}
          errors={fields.password.errors}
          inputClassName="pr-[44px]"
          type={isPasswordVisible ? "text" : "password"}
          isAutoCompleteDisabled
        />
        <IconButton
          iconName={isPasswordVisible ? "eye" : "eyeOff"}
          className="top-[calc(1em*1.5+2px+1px+8px+1em*1.5/2)] right-[10px] absolute p-[2px] -translate-y-[50%]"
          iconClassName="text-divider"
          onClick={togglePasswordVisibility}
          title={isPasswordVisible ? "Hide" : "Show"}
        />
      </div>
      {errors && <FormErrors errors={errors} />}
      <SignInButton />
    </form>
  );
};
export { SignInForm };
