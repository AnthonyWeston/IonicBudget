import { Component, OnInit, Input } from '@angular/core';
import { ExpenseCategory } from '../interfaces/expense-category';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses: ExpenseCategory[];

  constructor() { }

  ngOnInit() {}

}
