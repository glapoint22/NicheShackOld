import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { InputsModule } from '../../shared/inputs/inputs.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PreferencesComponent],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    HeaderFooterModule,
    InputsModule,
    FormsModule
  ]
})
export class PreferencesModule { }
