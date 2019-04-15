import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { BudgetItem } from '../interfaces/budget-item';

@Component({
  selector: 'app-new-income-modal',
  templateUrl: './new-income-modal.page.html',
  styleUrls: ['./new-income-modal.page.scss'],
})
export class NewIncomeModalPage implements OnInit {
  income: BudgetItem;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.income = { name: undefined, amount: undefined }
  }

  close(): void {
    this.modalController.dismiss();
  }

  addIncome(income: BudgetItem): void {
    this.modalController.dismiss(this.income);
  }

  addButtonDisabled(): boolean {
    return !(this.income.name && this.income.amount);
  }
}
