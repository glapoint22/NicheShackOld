// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { VideoPlayerModule } from './video-player/video-player.module';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { PageNotFoundModule } from 'src/app/components/page-not-found/page-not-found.module';
// import { SubscriptionFormModule } from 'src/app/components/subscription-form/subscription-form.module';
import { ErrorModule } from 'src/app/components/error/error.module';

// Services
import { CookieService } from 'ngx-cookie-service';

// Components
import { AppComponent } from './app.component';
// import { ModalModule } from 'src/app/components/modal/modal.module';
// import { QuickLookComponent } from "./quick-look/quick-look.component";


@NgModule({
  declarations: [
    AppComponent
    // QuickLookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // VideoPlayerModule,
    LoadingModule,
    PageNotFoundModule,
    // SubscriptionFormModule,
    ErrorModule,
    // ModalModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }