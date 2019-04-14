import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { Income } from '../interfaces/income';

@Component({
  selector: 'app-new-income-modal',
  templateUrl: './new-income-modal.page.html',
  styleUrls: ['./new-income-modal.page.scss'],
})
export class NewIncomeModalPage implements OnInit {
  income: Income;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.income = { source: undefined, amount: undefined }
  }

  close(): void {
    this.modalController.dismiss();
  }

  addIncome(income: Income): void {
    this.modalController.dismiss(this.income);
  }

  addButtonDisabled(): boolean {
    return !(this.income.source && this.income.amount);
  }
}
