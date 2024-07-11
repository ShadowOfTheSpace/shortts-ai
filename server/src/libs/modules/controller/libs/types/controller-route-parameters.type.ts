import { type HTTPMethod } from "~/libs/enums/enums.js";
import { type ValidationSchema, type ValueOf } from "~/libs/types/types.js";
import { type APIHandler } from "./api-handler.type.js";

type ControllerRouteParameters = {
  handler: APIHandler;
  method: ValueOf<typeof HTTPMethod>;
  path: string;
  validation?: {
    body?: ValidationSchema;
  };
};

export { type ControllerRouteParameters };
