import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewExpenseModalPage } from './new-expense-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewExpenseModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewExpenseModalPage]
})
export class NewExpenseModalPageModule {}
