import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "../env/index.ts";
import { getRoomsRoute } from "./routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: env.ALLOW_HOSTS.split(","),
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", (_resquest, reply) => {
  return reply.status(200).send({ message: "ok" });
});

app.register(getRoomsRoute);

app.listen({ port: env.PORT }).then((response) => {
  console.log(app.printRoutes());
  console.log("HTTP Running: ", response);
});
