import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews.component';
import { ProductGuard } from '../../product.guard';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
  },
  {
    path: 'write-review',
    loadChildren: () => import('../../pages/write-review/write-review.module').then(m => m.WriteReviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
