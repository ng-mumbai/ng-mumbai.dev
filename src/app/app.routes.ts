import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrganisersComponent } from './components/organisers/organisers.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'organisers',
    component: OrganisersComponent,
  },
];
