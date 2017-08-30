import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticationGuard } from './services/authGuard.service';
 
export const routes: Routes = [
  { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  { path: '', redirectTo: 'pages', pathMatch: 'full', canActivate: [AuthenticationGuard] },
  { path: '**', redirectTo: 'pages/dashboard', canActivate: [AuthenticationGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
