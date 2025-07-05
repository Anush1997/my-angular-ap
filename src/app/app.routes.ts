import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pre-login',
        pathMatch: 'full'
      },
      {
        path: 'pre-login',
        loadChildren: () =>
          import('./components/pre-login/pre-login.routes').then(m => m.preLoginRoutes)
      }
];
