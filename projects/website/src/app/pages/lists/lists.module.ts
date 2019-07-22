import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { FormsModule } from '@angular/forms';
import { StarsModule } from '../../shared/stars/stars.module';
import { ShareListComponent } from './share-list/share-list.component';


@NgModule({
  declarations: [ListsComponent, ShareListComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    HeaderFooterModule,
    FormsModule,
    StarsModule
  ]
})
export class ListsModule { }
