type DefaultApiHandlerOptions = {
  body?: unknown;
};

type APIHandlerOptions<
  T extends DefaultApiHandlerOptions = DefaultApiHandlerOptions
> = {
  body: T["body"];
};

export { type APIHandlerOptions };
