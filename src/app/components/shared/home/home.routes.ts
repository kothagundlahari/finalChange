import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsComponent} from '../../reports/reports.component';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'reports', component: ReportsComponent},
      {path: '', redirectTo: 'reports', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
