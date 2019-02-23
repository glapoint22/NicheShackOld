import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { InputsModule } from 'src/app/components/inputs/inputs.module';

@NgModule({
  declarations: [
    PreferencesComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    FormsModule,
    InputsModule
  ]
})
export class PreferencesModule { }
