import { BudgetItem } from "./budget-item";

export interface ExpenseCategory {
    category: string;
    expenses: BudgetItem[];
}
