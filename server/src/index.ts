import fastify from "fastify";
import { config } from "~/libs/modules/config/config.js";

const fastifyApp = fastify({
  logger: true
});

fastifyApp.get("/", (_request, response) => {
  response.send({
    message: "Hello, world!",
  });
});

fastifyApp.listen({
  port: config.ENV.APP.PORT,
  host: config.ENV.APP.HOST,
});
