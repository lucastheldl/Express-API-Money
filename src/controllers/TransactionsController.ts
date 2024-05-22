import { Request, Response } from "express";
import { createTransaction, getTransactions } from "../models/transactionModel";

export async function getTransactionsController(req: Request, res: Response) {
  const transactions = await getTransactions();
  return res.status(200).json(transactions);
}
export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  const { description, type, valor, category } = req.body;

  const newTransaction = {
    description,
    type,
    valor,
    category,
  };
  await createTransaction(newTransaction);

  return res.status(201).json({ newTransaction });
};
