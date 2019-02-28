import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailPreferencesRoutingModule } from './email-preferences-routing.module';
import { EmailPreferencesComponent } from './email-preferences.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { InputsModule } from 'src/app/components/inputs/inputs.module';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    EmailPreferencesComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    EmailPreferencesRoutingModule,
    HeaderFooterModule,
    FormsModule,
    InputsModule
  ]
})
export class EmailPreferencesModule { }
