import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewIncomeModalPage } from './new-income-modal/new-income-modal.page';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { NewExpenseModalPage } from './new-expense-modal/new-expense-modal.page';

@NgModule({
  declarations: [
    AppComponent,
    NewIncomeModalPage,
    NewExpenseModalPage,
  ],
  entryComponents: [
    NewIncomeModalPage,
    NewExpenseModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
