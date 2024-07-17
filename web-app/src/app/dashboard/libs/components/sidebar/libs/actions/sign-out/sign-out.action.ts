"use server";
import { cookies } from "next/headers";
import { CookiesName } from "~/libs/enums/enums";

const signOut = () => {
  cookies().delete(CookiesName.AUTH);
};

export { signOut };
