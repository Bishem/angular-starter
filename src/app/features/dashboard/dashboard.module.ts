import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DetailsComponent } from './layout/details/details.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DetailsComponent
  ]
})
export class DashboardModule { }
