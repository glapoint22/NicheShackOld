import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponentsModule } from './components/search-components.module';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { ProductModule } from '../../shared/product/product.module';
import { QuickLookModule } from '../../shared/quick-look/quick-look.module';
import { MediaViewerModule } from '../../shared/media-viewer/media-viewer.module';
import { PagingModule } from '../../shared/paging/paging.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchComponentsModule,
    HeaderFooterModule,
    FormsModule,
    ProductModule,
    QuickLookModule,
    MediaViewerModule,
    PagingModule
  ]
})
export class SearchModule { }
