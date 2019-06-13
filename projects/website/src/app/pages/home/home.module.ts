import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { HomeComponentsModule } from './components/home-components.module';
import { QuickLookModule } from '../../shared/quick-look/quick-look.module';
import { VideoPlayerModule } from '../../shared/video-player/video-player.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponentsModule,
    HeaderFooterModule,
    QuickLookModule,
    VideoPlayerModule
  ]
})
export class HomeModule { }
