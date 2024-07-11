import { type ServerApplicationRoute } from "~/libs/modules/server-application/server-application.js";
import {
  type APIHandler,
  type APIHandlerOptions,
  type Controller,
  type ControllerRouteParameters,
} from "./libs/types/types.js";

class BaseController implements Controller {
  private apiUrl: string;

  public routes: ServerApplicationRoute[];

  public constructor(apiPath: string) {
    this.apiUrl = apiPath;
    this.routes = [];
  }

  private async mapHandler(
    handler: APIHandler,
    request: Parameters<ServerApplicationRoute["handler"]>[0],
    reply: Parameters<ServerApplicationRoute["handler"]>[1]
  ): Promise<void> {
    console.log(`${request.method.toUpperCase()} on ${request.url}`);

    const handlerOptions = this.mapRequest(request);
    const { payload, status } = await handler(handlerOptions);

    return await reply.status(status).send(payload);
  }

  private mapRequest(
    request: Parameters<ServerApplicationRoute["handler"]>[0]
  ): APIHandlerOptions {
    const { body } = request;

    return {
      body,
    };
  }

  public addRoute(options: ControllerRouteParameters): void {
    const { handler, path } = options;
    const fullPath = this.apiUrl + path;

    this.routes.push({
      ...options,
      handler: (request, reply) => this.mapHandler(handler, request, reply),
      path: fullPath,
    });
  }
}

export { BaseController };
