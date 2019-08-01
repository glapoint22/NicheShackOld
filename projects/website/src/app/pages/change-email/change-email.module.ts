import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeEmailRoutingModule } from './change-email-routing.module';
import { ChangeEmailComponent } from './change-email.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { MatchValueModule } from '../../match-value.module';


@NgModule({
  declarations: [ChangeEmailComponent],
  imports: [
    CommonModule,
    ChangeEmailRoutingModule,
    HeaderFooterModule,
    FormsModule,
    MatchValueModule
  ]
})
export class ChangeEmailModule { }
