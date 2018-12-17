import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
