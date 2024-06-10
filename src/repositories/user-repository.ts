import { User } from "knex/types/tasks";

export interface UsersRepository {
  create: (user: User) => Promise<User | null>;
  findByEmail: (email: string) => Promise<User | null>;
}
