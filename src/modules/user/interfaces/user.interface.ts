export interface IUser {
    id: string;
    name: string;
    creditScore: number;
    financialHistory: FinancialRecord[];
  }
  
  export interface FinancialRecord {
    date: Date;
    amount: number;
    description: string;
  }
  