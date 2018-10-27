import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableComponent} from './components/shared/data-table/data-table.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from './components/shared/material-module/material.moudule';
import {HomeComponent} from './components/shared/home/home.component';
import {ReportsComponent} from './components/reports/reports.component';
import {HomeRoutingModule} from './components/shared/home/home.routes';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CommonModule} from '@angular/common';
import {routes} from './app.routing';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    LoginComponent,
    HomeComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HomeRoutingModule,
    NgxChartsModule,
    ChartsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
