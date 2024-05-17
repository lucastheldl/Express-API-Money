import mongoose from "mongoose";

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
