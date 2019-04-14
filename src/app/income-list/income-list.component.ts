import { Component, Input } from '@angular/core';
import { Income } from '../interfaces/income';


@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss'],
})
export class IncomeListComponent {
  @Input() incomeList: Income[];

  constructor() { }

}
