import { type Filter } from "../../types/types.js";

const getFlattenFilters = (...filters: Filter[] | Filter[][]) => {
  return filters.flatMap((filter) => {
    return filter;
  });
};

export { getFlattenFilters };
