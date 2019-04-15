import { Component, Input } from '@angular/core';
import { BudgetItem } from '../interfaces/budget-item';


@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
})
export class IncomeListComponent {
  @Input() incomeList: BudgetItem[];

  constructor() { }

}
