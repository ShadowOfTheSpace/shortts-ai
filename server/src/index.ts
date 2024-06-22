import fastify from "fastify";

const fastifyApp = fastify({
  logger: true
});

fastifyApp.get("/", (_request, response) => {
  response.send({
    message: "Hello, world!",
  });
});

fastifyApp.listen({
  port: 3001,
});
