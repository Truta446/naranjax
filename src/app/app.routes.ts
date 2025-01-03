import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
  },
  { path: 'form', loadChildren: () => import('./core/form/form.routes').then((m) => m.FORM_ROUTES) },
];
