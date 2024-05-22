import express from "express";
import {
  getTransactionsController,
  createTransactionController,
} from "../controllers/TransactionsController";

export const router = express();

router.get("/transactions", getTransactionsController);
router.post("/transactions", createTransactionController);
