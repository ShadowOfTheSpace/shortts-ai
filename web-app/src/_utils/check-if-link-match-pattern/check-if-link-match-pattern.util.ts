import { type AppRoute } from "~/_libs/enums/enums";
import { type ValueOf } from "~/_libs/types/types";

const checkIfLinkMatchPattern = (
  url: string,
  pattern: ValueOf<typeof AppRoute>
) => {
  const regex = new RegExp(`^${pattern.replace(/\[.*?\]/g, "[^/]+")}$`);

  return regex.test(url);
};

export { checkIfLinkMatchPattern };
