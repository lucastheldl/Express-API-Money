import mongoose from "mongoose";

interface Transaction {
  description: String;
  type: string;
  valor: number;
  category: String;
  userId: String;
}
const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["income", "outcome"],
  },
  category: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export const transactionModel = mongoose.model(
  "Transaction",
  transactionSchema
);

export async function createTransaction(transaction: Transaction) {
  try {
    return await transactionModel.create(transaction);
  } catch (error: any) {
    console.error(error.message);
  }
}
export async function getTransactions(id: string, q?: string) {
  try {
    if (q) {
      return await transactionModel.findOne({
        description: new RegExp(q, "i"),
        userId: id,
      });
    }
    return await transactionModel.find({ userId: id });
  } catch (error: any) {
    console.error(error.message);
  }
}
