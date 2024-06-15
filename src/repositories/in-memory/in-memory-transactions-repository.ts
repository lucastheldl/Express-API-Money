import knex from "knex";
import { Transaction } from "knex/types/Transaction";

export class InMemoryTransactionsRepository {
  async getAll() {
    const transactions = await knex("transactions").select("*");

    return { transactions };
  }
  async getOne(id: string) {
    const transaction = await knex("transactions").where("id", id);

    return { transaction };
  }
  async deleteOne(id: string) {
    await knex("transactions").where("id", id).del();
  }

  async create(transaction: Transaction) {
    const insertedTransaction = await knex("transactions").insert({
      transaction,
    });

    return { insertedTransaction };
  }
}
