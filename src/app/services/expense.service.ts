import { Injectable } from '@angular/core';
import { ExpenseCategory } from '../interfaces/expense-category';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: ExpenseCategory[] = [
    {
      category: 'Rent & Utilities',
      expenses: [{ name: 'Rent', amount: 500 }, { name: 'Utilities', amount: 125 }]
    },
    {
      category: 'Groceries & Food',
      expenses: [{ name: 'Groceries', amount: 250 }, { name: 'Eating out', amount: 50 }]
    },
    {
      category: 'Medical',
      expenses: [{ name: 'Counseling', amount: 100 }]
    },
    {
      category: 'Pet Supplies',
      expenses: [{ name: 'Cat litter', amount: 25 }, { name: 'Cat food', amount: 25 }]
    },
  ]

  constructor() { }

  getExpenses(): Observable<ExpenseCategory> {
    return from(this.expenses);
  }
}
