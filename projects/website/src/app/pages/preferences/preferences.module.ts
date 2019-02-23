import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { InputsModule } from '../../shared/inputs/inputs.module';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { FeaturedCategoriesModule } from '../../shared/featured-categories/featured-categories.module';

@NgModule({
  declarations: [
    PreferencesComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    HeaderFooterModule,
    InputsModule,
    FormsModule,
    FeaturedCategoriesModule
  ]
})
export class PreferencesModule { }
