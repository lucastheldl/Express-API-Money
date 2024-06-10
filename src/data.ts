import { knex as knexSetup, Knex } from "knex";
import { env } from "./env";
import path from "path";

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === "sqlite3"
      ? { filename: env.DATABASE_URL }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: path.resolve(__dirname, "migrations"),
  },
};

export const knex = knexSetup(config);
