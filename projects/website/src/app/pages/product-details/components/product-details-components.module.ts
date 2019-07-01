import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportItemComponent } from './report-item/report-item.component';
import { FormsModule } from '@angular/forms';
import { AddToListComponent } from './add-to-list/add-to-list.component';

@NgModule({
  declarations: [
    ReportItemComponent,
    AddToListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ReportItemComponent,
    AddToListComponent
  ]
})
export class ProductDetailsComponentsModule { }
