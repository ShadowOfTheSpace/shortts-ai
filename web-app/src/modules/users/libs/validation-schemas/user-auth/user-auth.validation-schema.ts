import { z } from "zod";

type UserAuth = {
  email: z.ZodString;
  password: z.ZodString;
};

const userAuth = z.object<UserAuth>({
  email: z
    .string({ message: "Email is required." })
    .email({ message: "Email is invalid." })
    .min(4, "Email is too short.")
    .max(70, "Email is too long."),
  password: z
    .string({ message: "Password is required." })
    .min(5, "Password is to short.")
    .max(100, "Password is too long."),
});

export { userAuth };
