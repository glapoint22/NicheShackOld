// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from 'src/app/components/page-not-found/page-not-found.module';
import { ErrorModule } from 'src/app/components/error/error.module';
import { TransferHttpCacheModule } from '@nguniversal/common';


// Components
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    PageNotFoundModule,
    ErrorModule,
    TransferHttpCacheModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }