import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HeaderFooterModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
