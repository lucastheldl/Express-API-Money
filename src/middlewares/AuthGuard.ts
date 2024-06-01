import { NextFunction, Response } from "express";
import { UserModel } from "../models/userModel";
import { verify } from "jsonwebtoken";
import { RequestWithUser } from "../interfaces/requestWithUser";
import { env } from "../env";

export async function AuthGuard(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  //checar cookie
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ errors: ["Acesso negado!"] });
  }

  //check if token is valid
  try {
    const verified = verify(token, env.JWT_SECRET);
    const user = await UserModel.findOne({ email: verified.sub });
    if (!user) {
      return res.status(401).json({ errors: ["Usuário não encontrado"] });
    }
    req.user = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    next();
  } catch (error) {
    res.status(401).json({ errors: ["Token inválido"] });
  }
  next();
}
