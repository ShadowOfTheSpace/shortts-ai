import { AppRoute } from "~/libs/enums/enums";
import { ValueOf } from "~/libs/types/types";

class GoogleAuthError extends Error {
  redirectTo: ValueOf<typeof AppRoute>;

  constructor(redirectTo: ValueOf<typeof AppRoute>, message: string) {
    super(message);
    this.redirectTo = redirectTo;
  }
}

export { GoogleAuthError };
