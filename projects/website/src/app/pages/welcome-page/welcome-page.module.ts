import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome-page.component';
import { WelcomeModule } from 'src/app/components/welcome/welcome.module';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { PageNotFoundModule } from 'src/app/components/page-not-found/page-not-found.module';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    WelcomeModule,
    HeaderFooterModule,
    PageNotFoundModule
  ]
})
export class WelcomePageModule { }
