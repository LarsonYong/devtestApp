// import { BuildDetailComponent } from './component/detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import { UnitComponent } from './unit.component';
import { UnitHistoryComponent } from './component/history/history.component';
// import { BuildListComponent } from './component/list/buildList.component'

const routes: Routes = [
  {
    path: '',
    component: UnitComponent,
    children: [
        { path: 'history', component: UnitHistoryComponent },
        // { path: 'detail', component: BuildDetailComponent },
      ],
  },
];

export const routing = RouterModule.forChild(routes);
