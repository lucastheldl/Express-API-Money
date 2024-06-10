import knex from "knex";
import { Transaction } from "knex/types/tasks";

export async function getAll() {
  const transactions = await knex("transactions").select("*");

  return { transactions };
}
export async function getOne(id: string) {
  const transaction = await knex("transactions").where("id", id);

  return { transaction };
}
export async function deleteOne(id: string) {
  await knex("transactions").where("id", id).del();
}

export async function create(transaction: Transaction) {
  const insertedTransaction = await knex("transactions").insert({
    transaction,
  });

  return { insertedTransaction };
}
