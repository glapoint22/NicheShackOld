import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { MatchValueModule } from '../../match-value.module';


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    HeaderFooterModule,
    FormsModule,
    MatchValueModule
  ]
})
export class ChangePasswordModule { }
