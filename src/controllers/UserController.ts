import { NextFunction, Request, Response } from "express";
import { registerUser } from "../models/userModel";

export async function RegisterUserController(req: Request, res: Response) {
  const { firstName, lastName, email, password } = req.body;
  const user = { firstName, lastName, email, password };

  const registeredUser = await registerUser(user);
  return res.status(200).json(user);
}
