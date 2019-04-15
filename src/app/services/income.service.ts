import { Injectable } from '@angular/core';
import { BudgetItem } from '../interfaces/budget-item';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  incomes: BudgetItem[] =
    [
      {name: 'Freelancing', amount: 2000.00},
      {name: 'Babysitting', amount: 250.00},
      {name: 'Selling crafts on Etsy', amount: 250.00}
    ];

  constructor() { }

  getIncomes(): Observable<BudgetItem> {
    return from(this.incomes);
  }

  addNewIncome(newIncome: BudgetItem): void {
    this.incomes.push(newIncome);
  }
}
