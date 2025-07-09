import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "../env/index.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: env.ALLOW_HOSTS.split(","),
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: env.PORT }).then((response) => {
  console.log("HTTP Running: ", response);
});
