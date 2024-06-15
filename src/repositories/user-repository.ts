import { User } from "knex/types/Transaction";

export interface UsersRepository {
  create: (user: User) => void;
  findByEmail: (email: string) => Promise<User | null>;
}
