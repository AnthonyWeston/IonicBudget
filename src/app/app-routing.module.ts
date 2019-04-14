import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'budget-summary', loadChildren: './budget-summary/budget-summary.module#BudgetSummaryPageModule' },
  { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesPageModule' },
  { path: 'income', loadChildren: './income/income.module#IncomePageModule' },
  { path: 'new-income-modal', loadChildren: './new-income-modal/new-income-modal.module#NewIncomeModalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
