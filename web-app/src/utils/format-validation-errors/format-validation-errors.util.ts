const formatValidationError = (
  errorsObject: Record<string, string[] | null>
) => {
  const errorsByField = Object.values(errorsObject);

  return errorsByField
    .filter((errors) => {
      return errors !== null;
    })
    .flatMap((errors) => {
      return errors.slice(0, 1);
    });
};

export { formatValidationError };
