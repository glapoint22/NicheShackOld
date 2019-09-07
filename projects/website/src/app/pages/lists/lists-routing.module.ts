import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view/:viewListId',
    loadChildren: () => import('../../pages/view-list/view-list.module').then(m => m.ViewListModule)
  },
  {
    path: 'collaborate/:collaborateListId',
    loadChildren: () => import('../../pages/collaborate-list/collaborate-list.module').then(m => m.CollaborateListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
