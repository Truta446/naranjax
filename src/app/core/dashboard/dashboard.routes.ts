import { Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'workspace', component: WorkspaceComponent },
];
