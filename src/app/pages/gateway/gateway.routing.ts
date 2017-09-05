import { Routes, RouterModule } from '@angular/router';

import { GatewayComponent } from './gateway.component';

const routes: Routes = [
  {
    path: '',
    component: GatewayComponent,
  },
];

export const routing = RouterModule.forChild(routes);
