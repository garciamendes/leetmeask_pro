import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  ALLOW_HOSTS: z.string(),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
