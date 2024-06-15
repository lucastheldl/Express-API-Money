import { Request, Response } from "express";
import { RequestWithUser } from "../interfaces/requestWithUser";
import { CreateUserService } from "../services/CreateUserService";
import { InMemoryUserRepository } from "../repositories/in-memory/in-memory-user-repository";
import { GetUserByEmailService } from "../services/GetUserByEmailService";

export async function RegisterUserController(
  req: RequestWithUser,
  res: Response
) {
  const { firstName, lastName, email, password } = req.body;
  const user = { firstName, lastName, email, password };
  const userRepo = new InMemoryUserRepository();
  const createUserService = new CreateUserService(userRepo);

  try {
    const createdUser = await createUserService.execute(user);
    return res.status(201).json({ createdUser: createdUser });
  } catch (error: any) {
    return res.status(409).json({ error: error.message });
  }
}
export async function LoginUserController(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = { email, password };
  const userRepo = new InMemoryUserRepository();
  const getUserService = new GetUserByEmailService(userRepo);

  try {
    const loggedUser = await getUserService.execute(email);

    return res.status(200).json({ loggedUser: loggedUser });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
