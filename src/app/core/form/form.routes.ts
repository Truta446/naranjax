import { Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';

export const FORM_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'basic', component: BasicFormComponent },
];
