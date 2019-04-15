import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../interfaces/budget-item';
import { IncomeService } from '../services/income.service';
import { NewIncomeModalPage } from '../new-income-modal/new-income-modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {
  incomes: BudgetItem[];

  constructor(private incomeService: IncomeService, public modalController: ModalController) { }

  ngOnInit() {
    this.getIncomes();
  }

  getIncomes(): void {
    this.incomes = [];
    this.incomeService.getIncomes().subscribe(
      income => this.incomes.push(income),
      error => console.error(error)
    );
  }

  getTotalIncome() : number {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  }

  async openNewIncomeDialog() {
    const newIncomeModal = await this.modalController.create({ component: NewIncomeModalPage });
    await newIncomeModal.present();

    const { data } = await newIncomeModal.onDidDismiss();
    this.incomeService.addNewIncome(data);
    this.getIncomes();
  }

}
