import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewIncomeModalPage } from './new-income-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewIncomeModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewIncomeModalPage]
})
export class NewIncomeModalPageModule {}
