// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Components
import { ArrowsComponent } from './arrows/arrows.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NoDataComponent } from './no-data/no-data.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProductComponent } from './product/product.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoPlayButtonComponent } from './video-play-button/video-play-button.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ArrowsComponent,
    CheckboxComponent,
    CustomInputComponent,
    FeaturedCategoriesComponent,
    FooterComponent,
    MenuComponent,
    NoDataComponent,
    PaginatorComponent,
    ProductComponent,
    RadioButtonComponent,
    SearchBarComponent,
    VideoPlayButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ArrowsComponent,
    CheckboxComponent,
    CustomInputComponent,
    FeaturedCategoriesComponent,
    FooterComponent,
    MenuComponent,
    NoDataComponent,
    PaginatorComponent,
    ProductComponent,
    RadioButtonComponent,
    SearchBarComponent,
    VideoPlayButtonComponent
  ]
})
export class SharedModule { }
