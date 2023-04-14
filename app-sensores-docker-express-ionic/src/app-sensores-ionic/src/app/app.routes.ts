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
  }
];
