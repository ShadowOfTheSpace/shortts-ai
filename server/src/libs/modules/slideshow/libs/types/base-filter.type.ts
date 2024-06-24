import { type ValueOf } from "~/libs/types/types.js";
import { FilterIOName } from "../enums/enums.js";

type BaseFilter = {
  inputName: ValueOf<typeof FilterIOName>;
  outputName: ValueOf<typeof FilterIOName>;
};

export { type BaseFilter };
