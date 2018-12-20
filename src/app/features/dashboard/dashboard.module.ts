import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HeroListComponent
  ]
})
export class DashboardModule { }
