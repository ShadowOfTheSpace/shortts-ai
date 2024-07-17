import { AppRoute } from "~/_libs/enums/enums";
import { ValueOf } from "~/_libs/types/types";

class GoogleAuthError extends Error {
  redirectTo: ValueOf<typeof AppRoute>;

  constructor(redirectTo: ValueOf<typeof AppRoute>, message: string) {
    super(message);
    this.redirectTo = redirectTo;
  }
}

export { GoogleAuthError };
