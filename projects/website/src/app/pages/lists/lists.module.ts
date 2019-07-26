import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { StarsModule } from '../../shared/stars/stars.module';
import { ListComponentsModule } from './components/list-components.module';
import { CreateListModule } from '../../shared/create-list/create-list.module';


@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    HeaderFooterModule,
    FormsModule,
    StarsModule,
    ListComponentsModule,
    CreateListModule

  ]
})
export class ListsModule { }
