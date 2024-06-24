type Properties = {
  name: string;
  nameIndex?: number;
  count?: number;
  isIndexed?: boolean;
};

const buildFilterIONames = ({
  name,
  nameIndex = 0,
  count = 1,
  isIndexed = false,
}: Properties) => {
  return new Array(count)
    .fill(count)
    .map((_, index) => {
      return `[${name}${isIndexed ? nameIndex + index : ""}]`;
    })
    .join("");
};

export { buildFilterIONames };
