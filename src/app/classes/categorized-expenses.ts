import { BudgetItem } from '../interfaces/budget-item';
import { CategorizedExpenseData } from '../interfaces/categorized-expense-data';

export class CategorizedExpenses {
    expenses: CategorizedExpenseData;

    constructor(expenses?: any) {
        this.expenses = expenses ? expenses : { };
    }

    getCategories(): string[] {
        return Object.keys(this.expenses);
    }

    getExpenseItems(): BudgetItem[] {
        return Object.values(this.expenses).reduce((accumulator: BudgetItem[], budgetItems: BudgetItem[]) =>
            accumulator.concat(budgetItems), []);
    }

    getExpenseItemsByCategory(category: string) : BudgetItem[] {
        return this.expenses[category];
    }

    addExpenses(categorizedExpenses: any): void {
        console.log(categorizedExpenses);
        Object.keys(categorizedExpenses).forEach(category =>
            {
                if (!this.expenses[category]) {
                    this.expenses[category] = [];
                }
                this.expenses[category] = this.expenses[category].concat(categorizedExpenses[category]);
            });
        console.log(this.expenses);
        console.log('');
    }

    getTotal(): number {
        return this.getExpenseItems().reduce((sum: number, expense: BudgetItem) => sum += expense.amount, 0);
    }
}