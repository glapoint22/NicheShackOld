import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteReviewComponent } from './write-review.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WriteReviewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteReviewRoutingModule { }
