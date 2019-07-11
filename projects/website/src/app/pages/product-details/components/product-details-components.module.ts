import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportItemComponent } from './report-item/report-item.component';
import { FormsModule } from '@angular/forms';
import { AddToListComponent } from './add-to-list/add-to-list.component';
import { DialogBoxModule } from '../../../shared/dialog-box/dialog-box.module';

@NgModule({
  declarations: [
    ReportItemComponent,
    AddToListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogBoxModule
  ],
  exports: [
    ReportItemComponent,
    AddToListComponent
  ]
})
export class ProductDetailsComponentsModule { }
