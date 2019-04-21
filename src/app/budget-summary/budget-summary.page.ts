import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.page.html',
  styleUrls: ['./budget-summary.page.scss'],
})
export class BudgetSummaryPage {
  labels: string[] = [];
  amounts: number[] = [];
  totalIncome: number;
  totalExpenses: number;
  options: any = {
    legend: {
       display: false
    },
    color: 'rgba(0,0,0,0)',
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };

  constructor(private expenseService: ExpenseService, private incomeService: IncomeService) { }

  ionViewWillEnter() {
    this.getIncomesAndExpenses()
  }

  getIncomesAndExpenses(): void {
    this.labels = [];
    this.amounts = [];
    this.incomeService.getTotalIncome().subscribe(
      (totalIncome: number) => {
        this.totalIncome = totalIncome;
        this.labels.push('Income');
        this.amounts.push(totalIncome);
        this.expenseService.getTotalExpenses().subscribe(
          (totalExpenses: number) => {
            this.totalExpenses = totalExpenses;
            this.labels.push('Expenses')
            this.amounts.push(totalExpenses);
          },
          error => console.error(error)
        );
      },
      error => console.error(error)
    );
  }

}
