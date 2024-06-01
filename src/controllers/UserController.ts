import { NextFunction, Request, Response } from "express";
import { loginUser, registerUser } from "../models/userModel";
import { RequestWithUser } from "../interfaces/requestWithUser";

export async function RegisterUserController(
  req: RequestWithUser,
  res: Response
) {
  const { firstName, lastName, email, password } = req.body;
  const user = { firstName, lastName, email, password };

  try {
    const { token, userId } = await registerUser(user);
    return res.status(201).json({ token: token, userId });
  } catch (error: any) {
    return res.status(409).json({ error: error.message });
  }
}
export async function LoginUserController(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = { email, password };

  try {
    const { token } = await loginUser(user);

    return res.status(200).json({ token: token });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
