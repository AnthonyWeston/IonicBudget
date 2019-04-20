import { Component, OnInit, Input } from '@angular/core';
import { CategorizedExpenses } from '../classes/categorized-expenses';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses: CategorizedExpenses;

  constructor() { }

  ngOnInit() {}

}
