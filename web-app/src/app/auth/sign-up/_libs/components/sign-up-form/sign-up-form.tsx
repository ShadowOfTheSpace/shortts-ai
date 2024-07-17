"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { AuthErrors } from "~/app/auth/_libs/components/components";
import { Input } from "~/_libs/components/components";
import { ActionErrorState } from "~/_libs/types/types";
import { userAuthValidationSchema } from "~/_modules/users/users.client";
import { signUp } from "../../actions/actions";
import { SignInButton } from "../sign-up-button/sign-up-button";

const SignUpForm: React.FC = () => {
  const searchParams = useSearchParams();
  const errorFromUrl = searchParams.get("error");
  const [errors, action] = useFormState<ActionErrorState, FormData>(
    signUp,
    errorFromUrl ? [errorFromUrl] : null
  );

  const [form, fields] = useForm({
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: userAuthValidationSchema });
    },
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="flex flex-col gap-[5px] w-[400px]"
    >
      <Input
        placeholder="Enter your email"
        label="Email"
        defaultValue={fields.email.initialValue}
        key={fields.email.key}
        name={fields.email.name}
        errors={fields.email.errors}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        defaultValue={fields.password.initialValue}
        key={fields.password.key}
        name={fields.password.name}
        errors={fields.password.errors}
      />
      {errors && <AuthErrors errors={errors} />}
      <SignInButton />
    </form>
  );
};
export { SignUpForm };
