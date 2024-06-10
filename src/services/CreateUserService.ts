import { User } from "knex/types/tasks";
import { UsersRepository } from "../repositories/user-repository";

export class CreateUserService {
  constructor(private userRepository: UsersRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password, firstName, lastName }: User) {
    const user = { email, password, firstName, lastName };
    try {
      await this.userRepository.create(user);
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
}
