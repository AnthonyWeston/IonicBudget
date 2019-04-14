import { Injectable } from '@angular/core';
import { Income } from '../interfaces/income';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  incomes: Income[] =
    [
      {source: 'Freelancing', amount: 2000.00},
      {source: 'Babysitting', amount: 250.00},
      {source: 'Selling crafts on Etsy', amount: 250.00}
    ];

  constructor() { }

  getIncomes(): Observable<Income> {
    return from(this.incomes);
  }

  addNewIncome(newIncome: Income): void {
    this.incomes.push(newIncome);
  }
}
