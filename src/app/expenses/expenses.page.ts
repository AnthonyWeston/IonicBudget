import { Component, OnInit } from '@angular/core';
import { ExpenseCategory } from '../interfaces/expense-category';
import { ExpenseService } from '../services/expense.service';
import { NewExpenseModalPage } from '../new-expense-modal/new-expense-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  expenses: ExpenseCategory[]

  constructor(private expenseService: ExpenseService, private modalController: ModalController) { }

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

  async openNewExpenseDialog() {
    const newExpenseModal = await this.modalController.create({ component: NewExpenseModalPage });
    await newExpenseModal.present();

    const { data } = await newExpenseModal.onDidDismiss();
    this.expenseService.addNewExpense(data);
    this.getExpenses();
  }
}
