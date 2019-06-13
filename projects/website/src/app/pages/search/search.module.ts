import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponentsModule } from './components/search-components.module';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { ArrowsModule } from '../../shared/arrows/arrows.module';
import { FormsModule } from '@angular/forms';
import { ProductModule } from '../../shared/product/product.module';
import { VideoPlayerModule } from '../../shared/video-player/video-player.module';
import { QuickLookModule } from '../../shared/quick-look/quick-look.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchComponentsModule,
    HeaderFooterModule,
    ArrowsModule,
    FormsModule,
    ProductModule,
    VideoPlayerModule,
    QuickLookModule
  ]
})
export class SearchModule { }
