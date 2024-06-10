import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  JWT_SECRET: z.string(),
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid enviroment variables", _env.error.format());

  throw new Error("Invalid enviroment variables");
}

export const env = _env.data;
