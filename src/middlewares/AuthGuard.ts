import { NextFunction, Request, Response } from "express";

export function AuthGuard(req: Request, res: Response, next: NextFunction) {
  //checar cookie
  next();
}
