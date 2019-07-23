import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/email-preferences/email-preferences.module').then(m => m.EmailPreferencesModule)
  },
  {
    path: 'lists',
    loadChildren: () => import('./pages/lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: 'lists/view/:viewListId',
    loadChildren: () => import('./pages/view-list/view-list.module').then(m => m.ViewListModule)
  },
  {
    path: 'reviews/write-review',
    loadChildren: () => import('./pages/write-review/write-review.module').then(m => m.WriteReviewModule)
  },
  {
    path: 'reviews/:product',
    loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule)
  },
  {
    path: ':product',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
