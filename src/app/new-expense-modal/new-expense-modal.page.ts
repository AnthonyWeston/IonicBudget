import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BudgetItem } from '../interfaces/budget-item';

@Component({
  selector: 'app-new-expense-modal',
  templateUrl: './new-expense-modal.page.html',
  styleUrls: ['./new-expense-modal.page.scss'],
})
export class NewExpenseModalPage implements OnInit {
  category: string;
  expense: BudgetItem;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.expense = { category: undefined, name: undefined, amount: undefined }
  }

  close(): void {
    this.modalController.dismiss();
  }

  addExpense(): void {
    this.modalController.dismiss({ [this.category]: this.expense });
  }

  addButtonDisabled(): boolean {
    return !(this.category && this.expense.name && this.expense.amount);
  }

}
