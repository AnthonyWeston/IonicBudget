import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from '../interfaces/expense-category';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  expenses: ExpenseCategory[]

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenses = [];
    this.expenseService.getExpenses().subscribe(
      expense => this.expenses.push(expense),
      error => console.error(error)
    );
  }

  getTotalExpenses() : number {
    return this.expenses.map(expenseCategory => 
      expenseCategory.expenses.map(expense => expense.amount)
        .reduce((sum, expense) => sum + expense))
      .reduce((sum, expenseSubtotal) => sum + expenseSubtotal);
  }

  openNewExpenseDialog() : void {
    console.log('new expense');
  }
}
