import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadPageComponent } from './lead-page/lead-page.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ':leadPage',
    component: LeadPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
