import Fastify, {
  type FastifyError,
  type FastifyInstance,
  type RouteOptions,
} from "fastify";
import { HTTPCode } from "~/libs/enums/enums.js";
import { ValidationError } from "~/libs/exceptions/exceptions.js";
import { type ValidationSchema } from "~/libs/types/types.js";
import { type Config } from "../config/config.js";
import { ServerErrorType } from "./libs/enums/enums.js";
import {
  type ServerApplicationRoute,
  type ServerCommonErrorResponse,
  type ServerValidationErrorResponse,
} from "./libs/types/types.js";

type Constructor = {
  config: Config;
  routes: ServerApplicationRoute[];
};

class BaseServerApplication {
  private app: FastifyInstance;
  private config: Config;
  private routes: ServerApplicationRoute[];

  constructor({ config, routes }: Constructor) {
    this.app = Fastify({ ignoreTrailingSlash: true });
    this.config = config;
    this.routes = routes;
  }

  public async init() {
    this.initValidationCompiler();
    this.initErrorHandler();
    this.initRoutes();

    try {
      await this.app.listen({
        host: this.config.ENV.APP.HOST,
        port: this.config.ENV.APP.PORT,
      });

      console.log(
        `Application is listening on PORT – ${this.config.ENV.APP.PORT}`
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message, {
          cause: error.cause,
          stack: error.stack,
        });
      }
      throw error;
    }
  }

  private initErrorHandler(): void {
    this.app.setErrorHandler(
      (error: FastifyError | ValidationError, _request, reply) => {
        if ("issues" in error) {
          console.log(`[Validation Error]: ${error.message}`);

          error.issues.forEach((issue) => {
            console.log(`[${issue.path.toString()}] — ${issue.message}`);
          });

          const response: ServerValidationErrorResponse = {
            details: error.issues.map((issue) => ({
              message: issue.message,
              path: issue.path,
            })),
            errorType: ServerErrorType.VALIDATION,
            message: error.message,
          };

          return reply.status(HTTPCode.UNPROCESSED_ENTITY).send(response);
        }

        const response: ServerCommonErrorResponse = {
          errorType: ServerErrorType.COMMON,
          message: error.message,
        };

        return reply.status(HTTPCode.INTERNAL_SERVER_ERROR).send(response);
      }
    );
  }

  private initValidationCompiler(): void {
    this.app.setValidatorCompiler<ValidationSchema>(({ schema }) => {
      return <T, R = ReturnType<ValidationSchema["parse"]>>(data: T): R => {
        return schema.parse(data) as R;
      };
    });
  }

  private initRoutes() {
    this.routes.forEach(({ handler, method, path, validation }) => {
      const options: RouteOptions = {
        handler,
        method,
        url: path,
        schema: {
          body: validation?.body,
        },
      };

      this.app.route(options);
      console.log(`Route: ${method} ${path} is registered`);
    });
  }
}

export { BaseServerApplication };
