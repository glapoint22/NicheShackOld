import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { SearchComponent } from './pages/search/search.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
