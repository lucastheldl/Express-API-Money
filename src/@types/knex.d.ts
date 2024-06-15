declare module "knex/types/Transaction" {
  export interface Transaction {
    id: string;
    description: string;
    category: string;
    type: string;
    valor: number;
    userId: string;
  }
  export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: number;
  }
}
