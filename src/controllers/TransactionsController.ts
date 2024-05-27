import { Request, Response } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "../models/transactionModel";

export async function getTransactionsController(req: Request, res: Response) {
  const { id } = req.params;
  const transactions = await getTransactions(id);
  return res.status(200).json(transactions);
}
export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  const { description, type, valor, category, userId } = req.body;

  const newTransaction = {
    description,
    type,
    valor,
    category,
    userId,
  };
  await createTransaction(newTransaction);

  return res.status(201).json({ newTransaction });
};

export async function deleteTransactionController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await deleteTransaction(id);
    return res.status(200).send();
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).send();
  }
}
