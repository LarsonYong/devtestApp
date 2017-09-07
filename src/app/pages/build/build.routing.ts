import { BuildDetailComponent } from './component/detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import { BuildComponent } from './build.component';
import { BuildListComponent } from './component/list/buildList.component'

const routes: Routes = [
  {
    path: '',
    component: BuildComponent,
    children: [
        { path: 'list', component: BuildListComponent },
        { path: 'detail', component: BuildDetailComponent },
      ],
  },
];

export const routing = RouterModule.forChild(routes);
