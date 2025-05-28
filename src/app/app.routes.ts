import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'speaker',
    loadComponent: () => import('./pages/speaker.component').then((m) => m.SpeakerComponent)
  },
  {
    path: 'sponsor',
    loadComponent: () => import('./pages/sponsor.component').then((m) => m.SponsorComponent)
  }
];
