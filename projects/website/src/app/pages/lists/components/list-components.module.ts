import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareListComponent } from './share-list/share-list.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { FormsModule } from '@angular/forms';
import { ManageCollaboratorsComponent } from './manage-collaborators/manage-collaborators.component';
import { DeleteListComponent } from './delete-list/delete-list.component';



@NgModule({
  declarations: [
    ShareListComponent,
    ManageListComponent,
    ManageCollaboratorsComponent,
    DeleteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShareListComponent,
    ManageListComponent,
    ManageCollaboratorsComponent,
    DeleteListComponent
  ]
})
export class ListComponentsModule { }
