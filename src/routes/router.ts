import express from "express";
import {
  getTransactionsController,
  createTransactionController,
  deleteTransactionController,
} from "../controllers/TransactionsController";

import { AuthGuard } from "../middlewares/AuthGuard";
import {
  LoginUserController,
  RegisterUserController,
} from "../controllers/UserController";
import {
  UserLoginValidation,
  UserRegisterValidation,
} from "../middlewares/UserValidation";

export const router = express();

router.get("/transactions/:id", AuthGuard, getTransactionsController);
router.post("/transactions", AuthGuard, createTransactionController);
router.delete("/transactions/:id", AuthGuard, deleteTransactionController);

router.post(
  "/auth/register",
  AuthGuard,
  UserRegisterValidation,
  RegisterUserController
);
router.post("/auth/login", AuthGuard, UserLoginValidation, LoginUserController);
