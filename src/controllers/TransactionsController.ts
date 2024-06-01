import { Request, Response } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "../models/transactionModel";
import { RequestWithUser } from "../interfaces/requestWithUser";

export async function getTransactionsController(
  req: RequestWithUser,
  res: Response
) {
  const { id } = req.params;
  try {
    const transactions = await getTransactions(id);
    return res.status(200).json(transactions);
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).send();
  }
}
export const createTransactionController = async (
  req: RequestWithUser,
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
  try {
    await createTransaction(newTransaction);
    console.log(req.user);
    return res.status(201).json({ newTransaction });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).send();
  }
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
