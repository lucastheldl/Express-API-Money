import knex from "knex";
import { User } from "knex/types/tasks";

export class InMemoryUserRepository {
  async create(user: User) {
    const createdUser = await knex("users").insert({
      user,
    });

    if (!createdUser) {
      return null;
    }
    return createdUser;
  }
  async findByEmail(email: string) {
    const user = await knex("users").where(email, email);

    if (!user) {
      return null;
    }
    return user;
  }
}
