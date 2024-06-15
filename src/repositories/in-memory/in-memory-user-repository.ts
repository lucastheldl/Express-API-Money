import knex from "knex";
import { User } from "knex/types/Transaction";

export class InMemoryUserRepository {
  async create(user: User) {
    await knex("users").insert({
      user,
    });
  }
  async findByEmail(email: string) {
    const user = await knex("users").where(email, email).first();

    if (!user) {
      return null;
    }
    return user;
  }
}
