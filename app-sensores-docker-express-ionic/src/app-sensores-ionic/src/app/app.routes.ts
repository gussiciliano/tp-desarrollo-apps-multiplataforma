import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'device/:id',
    loadComponent: () =>
      import('./device/device.page').then((m) => m.DevicePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mediciones/:id',
    loadComponent: () => import('./mediciones/mediciones.page').then( m => m.MedicionesPage)
  },
  {
    path: 'logriegos/:deviceId',
    loadComponent: () => import('./log-riegos/log-riegos.page').then( m => m.LogRiegosPage)
  }
];
