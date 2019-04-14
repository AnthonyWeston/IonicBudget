import { Component, OnInit } from '@angular/core';
import { Income } from '../interfaces/income';
import { IncomeService } from '../services/income.service';
import { NewIncomeModalPage } from '../new-income-modal/new-income-modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {
  incomes: Income[];

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

  async openNewIncomeDialog() {
    const newIncomeModal = await this.modalController.create({ component: NewIncomeModalPage });
    await newIncomeModal.present();

    const { data } = await newIncomeModal.onDidDismiss();
    this.incomeService.addNewIncome(data);
    this.getIncomes();

  }

}
