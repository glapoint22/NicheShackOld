import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewListRoutingModule } from './view-list-routing.module';
import { ViewListComponent } from './view-list.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { StarsModule } from '../../shared/stars/stars.module';
import { ListComponentsModule } from '../lists/components/list-components.module';
import { CreateListModule } from '../../shared/create-list/create-list.module';


@NgModule({
  declarations: [ViewListComponent],
  imports: [
    CommonModule,
    ViewListRoutingModule,
    HeaderFooterModule,
    FormsModule,
    StarsModule,
    ListComponentsModule,
    CreateListModule
  ]
})
export class ViewListModule { }
