import { type ValueOf } from "~/libs/types/types.js";
import { type FilterName } from "../enums/enums.js";

type Filter = {
  inputs: string;
  filter: ValueOf<typeof FilterName>;
  options: Record<string, string | number>;
  outputs: string;
};

export { type Filter };
