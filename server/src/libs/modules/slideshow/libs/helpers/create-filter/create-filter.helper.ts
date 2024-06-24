import { type Filter } from "../../types/filter.type.js";
import { buildFilterIONames } from "../helpers.js";

type Properties = {
  input: Parameters<typeof buildFilterIONames>[0];
  filter: Filter["filter"];
  options: Filter["options"];
  output: Parameters<typeof buildFilterIONames>[0];
};

const createFilter = ({
  filter,
  input,
  options,
  output,
}: Properties): Filter => {
  const inputNames = buildFilterIONames(input);
  const outputNames = buildFilterIONames(output);

  return {
    filter,
    inputs: inputNames,
    options,
    outputs: outputNames,
  };
};

export { createFilter };
