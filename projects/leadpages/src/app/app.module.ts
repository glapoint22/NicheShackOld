// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LeadPageSubscriptionFormModule } from 'src/app/components/lead-page-subscription-form/lead-page-subscription-form.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { PageNotFoundModule } from 'src/app/components/page-not-found/page-not-found.module';
import { SubscriptionFormModule } from 'src/app/components/subscription-form/subscription-form.module';

// Components
import { AppComponent } from './app.component';
import { LeadPageComponent } from './pages/lead-page/lead-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeadPageSubscriptionFormModule,
    ErrorModule,
    PageNotFoundModule,
    SubscriptionFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
