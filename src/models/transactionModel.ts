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
  return await transactionModel.create(transaction);
}
export async function getTransactions() {
  return await transactionModel.find();
}
