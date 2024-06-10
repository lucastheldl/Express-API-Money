declare module "knex/types/tasks" {
  export interface Transaction {
    id: string;
    description: string;
    category: string;
    type: string;
    valor: number;
    userId: string;
  }
}
