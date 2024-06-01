import { Request } from "express";

export interface RequestWithUser extends Request {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}
