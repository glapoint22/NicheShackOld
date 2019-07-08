import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path: 'search',
    loadChildren: './pages/search/search.module#SearchModule'
  },
  {
    path: 'welcome',
    loadChildren: './pages/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'preferences',
    loadChildren: './pages/email-preferences/email-preferences.module#EmailPreferencesModule'
  },
  {
    path: 'reviews/write-review',
    loadChildren: './pages/write-review/write-review.module#WriteReviewModule'
  },
  {
    path: 'reviews/:product',
    loadChildren: './pages/reviews/reviews.module#ReviewsModule'
  },
  {
    path: ':product',
    loadChildren: './pages/product-details/product-details.module#ProductDetailsModule'
  },
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
