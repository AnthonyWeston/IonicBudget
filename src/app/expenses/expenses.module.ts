import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpensesPage } from './expenses.page';
import { ExpenseListComponent } from '../expense-list/expense-list.component';

import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: ExpensesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule,
  ],
  declarations: [ExpensesPage, ExpenseListComponent]
})
export class ExpensesPageModule {}
