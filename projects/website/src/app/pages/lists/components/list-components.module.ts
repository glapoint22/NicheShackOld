import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareListComponent } from './share-list/share-list.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { FormsModule } from '@angular/forms';
import { ManageCollaboratorsComponent } from './manage-collaborators/manage-collaborators.component';



@NgModule({
  declarations: [
    ShareListComponent,
    ManageListComponent,
    ManageCollaboratorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShareListComponent,
    ManageListComponent,
    ManageCollaboratorsComponent
  ]
})
export class ListComponentsModule { }
