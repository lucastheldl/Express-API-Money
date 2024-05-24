import { NextFunction, Response, Request } from "express";

export function UserRegisterValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send("Invalid input");
  }

  next();
}
