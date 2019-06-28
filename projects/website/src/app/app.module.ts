// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from 'src/app/components/page-not-found/page-not-found.module';
import { ErrorModule } from 'src/app/components/error/error.module';

// Services
import { CookieService } from 'ngx-cookie-service';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PageNotFoundModule,
    ErrorModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }