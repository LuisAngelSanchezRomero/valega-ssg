import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/inicio/inicio').then((m) => m.Inicio),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./features/productos/productos').then((m) => m.Productos),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./features/nosotros/nosotros').then((m) => m.Nosotros),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
