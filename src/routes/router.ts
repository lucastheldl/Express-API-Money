import express from "express";
import {
  getTransactionsController,
  createTransactionController,
} from "../controllers/TransactionsController";

import { AuthGuard } from "../middlewares/AuthGuard";
import { RegisterUserController } from "../controllers/UserController";
import { UserRegisterValidation } from "../middlewares/UserValidation";

export const router = express();

router.get("/transactions", AuthGuard, getTransactionsController);
router.post("/transactions", AuthGuard, createTransactionController);

router.post(
  "/auth/register",
  AuthGuard,
  UserRegisterValidation,
  RegisterUserController
);
