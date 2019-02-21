import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConfirmComponent } from './confirm.component';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
    NoDataModule,
    HeaderFooterModule
  ]
})
export class ConfirmModule { }
