import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { SearchComponent } from './search/search.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ConfirmComponent,
    PreferencesComponent,
    SearchComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    SearchModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ConfirmComponent,
    PreferencesComponent,
    SearchComponent,
    ThankYouComponent
  ]
})
export class PagesModule { }
