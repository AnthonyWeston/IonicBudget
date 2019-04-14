import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'budget-summary',
        children: [
          {
            path: '',
            loadChildren: '../budget-summary/budget-summary.module#BudgetSummaryPageModule'
          }
        ]
      },
      {
        path: 'income',
        children: [
          {
            path: '',
            loadChildren: '../income/income.module#IncomePageModule'
          }
        ]
      },
      {
        path: 'expenses',
        children: [
          {
            path: '',
            loadChildren: '../expenses/expenses.module#ExpensesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/budget-summary',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/budget-summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
