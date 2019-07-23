import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareListComponent } from './share-list/share-list.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShareListComponent,
    ManageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShareListComponent,
    ManageListComponent
  ]
})
export class ListComponentsModule { }
