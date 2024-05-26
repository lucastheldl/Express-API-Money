import { NextFunction, Request, Response } from "express";
import { loginUser, registerUser } from "../models/userModel";

export async function RegisterUserController(req: Request, res: Response) {
  const { firstName, lastName, email, password } = req.body;
  const user = { firstName, lastName, email, password };

  try {
    await registerUser(user);
  } catch (error: any) {
    return res.status(409).json({ error: error.message });
  }
  return res.status(201).send();
}
export async function LoginUserController(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = { email, password };

  try {
    await loginUser(user);

    return res.status(200).send();
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
