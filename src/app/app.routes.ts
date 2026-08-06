import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Exo01ProfilStatique } from './features/exercices/exo01-profil-statique/exo01-profil-statique';

export const routes: Routes = [
  {
    title: 'accueil',
    path: 'accueil',
    component: Home,
  },
  {
    title: 'exo01-profil-statique',
    path: 'exo01',
    component: Exo01ProfilStatique,
  },
];
