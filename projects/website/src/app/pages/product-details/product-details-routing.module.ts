import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from "./product-details.component";

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
  },
  {
    path: 'reviews',
    loadChildren: () => import('../../pages/reviews/reviews.module').then(m => m.ReviewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
