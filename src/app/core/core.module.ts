import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './layout/core/core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
  CommonModule,
    CoreRoutingModule,
  ],
  declarations: [
    CoreComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
