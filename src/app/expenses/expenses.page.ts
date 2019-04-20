import { Component, OnInit } from '@angular/core';
import { CategorizedExpenses } from '../classes/categorized-expenses';
import { ExpenseService } from '../services/expense.service';
import { NewExpenseModalPage } from '../new-expense-modal/new-expense-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  expenses: CategorizedExpenses;

  constructor(private expenseService: ExpenseService, private modalController: ModalController) { }

  ngOnInit() {
    this.expenses = new CategorizedExpenses();
    this.expenseService.getExpenses().subscribe(
      categorizedExpense => this.expenses.addExpenses(categorizedExpense));
  }

  getTotalExpenses(): number {
    return this.expenses.getTotal();
  }

  async openNewExpenseDialog() {
    const newExpenseModal = await this.modalController.create({ component: NewExpenseModalPage });
    await newExpenseModal.present();

    const { data } = await newExpenseModal.onDidDismiss();
    this.expenseService.addExpenses(data);
  }
}
