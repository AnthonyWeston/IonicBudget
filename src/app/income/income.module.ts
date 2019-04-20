import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncomePage } from './income.page';
import { IncomeListComponent } from '../income-list/income-list.component';

import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: IncomePage
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
  declarations: [IncomePage, IncomeListComponent]
})
export class IncomePageModule {}
