import { type FastifyReply, type FastifyRequest } from "fastify";

import { type HTTPMethod } from "~/libs/enums/enums.js";
import { type ValidationSchema, type ValueOf } from "~/libs/types/types.js";

type ServerApplicationRoute = {
  handler: (
    request: FastifyRequest,
    reply: FastifyReply
  ) => Promise<void> | void;
  method: ValueOf<typeof HTTPMethod>;
  path: string;
  validation?: {
    body?: ValidationSchema;
  };
};

export { type ServerApplicationRoute };
