import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BuildComponent } from './build.component';
import { routing } from './build.routing';
import { BuildListComponent, FilterPipe } from './component/list/buildList.component';
import { BuildDetailComponent } from './component/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    
  ],
  declarations: [
    BuildComponent,
    BuildListComponent,
    BuildDetailComponent,
    FilterPipe,
  ],
})
export class BuildModule {}
