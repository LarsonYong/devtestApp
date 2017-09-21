import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationGuard } from '../services/authGuard.service';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule',
  // },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'gateway', loadChildren: './gateway/gateway.module#GatewayModule' },
      { path: 'build', loadChildren: './build/build.module#BuildModule' },
      { path: 'unit', loadChildren: './unit/unit.module#UnitModule' },
      { path: 'userAdmin', loadChildren: './userAdmin/userAdmin.module#UserAdmin' },
      
    ],
    canActivate: [AuthenticationGuard],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
