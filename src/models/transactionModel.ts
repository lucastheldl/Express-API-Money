import mongoose from "mongoose";

interface Transaction {
  description: String;
  type: string;
  valor: number;
  category: String;
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
export async function getTransactions(q?: string) {
  try {
    if (q) {
      return await transactionModel.find({ description: new RegExp(q, "i") });
    }
    return await transactionModel.find();
  } catch (error: any) {
    console.error(error.message);
  }
}
