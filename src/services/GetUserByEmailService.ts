import { User } from "knex/types/Transaction";
import { UsersRepository } from "../repositories/user-repository";

export class GetUserByEmailService {
  constructor(private userRepository: UsersRepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string) {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        throw new Error("User dont exists");
      }

      return user;
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
}
