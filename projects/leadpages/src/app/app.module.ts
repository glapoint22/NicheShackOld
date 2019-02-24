// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from 'src/app/components/page-not-found/page-not-found.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LeadPageComponent } from './lead-page/lead-page.component';
import { LeadPageSubscriptionFormModule } from 'src/app/components/lead-page-subscription-form/lead-page-subscription-form.module';

@NgModule({
  declarations: [
    AppComponent,
    LeadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageNotFoundModule,
    HttpClientModule,
    LeadPageSubscriptionFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
