import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BudgetSummaryPage } from './budget-summary.page';

import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  {
    path: '',
    component: BudgetSummaryPage
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
  declarations: [BudgetSummaryPage]
})
export class BudgetSummaryPageModule {}
