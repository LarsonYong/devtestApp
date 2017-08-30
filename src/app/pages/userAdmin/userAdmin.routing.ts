import { Routes, RouterModule } from '@angular/router';
import { UserAdminComponent } from './userAdmin.component';

const routes: Routes = [
  {
    path: '',
    component: UserAdminComponent,
  },
];

export const routing = RouterModule.forChild(routes);
