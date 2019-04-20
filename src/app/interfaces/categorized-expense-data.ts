import { BudgetItem } from "./budget-item";


export interface CategorizedExpenseData {
    [propName: string]: BudgetItem[];
}
