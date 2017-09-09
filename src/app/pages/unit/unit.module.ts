import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnitComponent } from './unit.component';
import { routing } from './unit.routing';
import { UnitHistoryComponent } from './component/history/history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    
  ],
  declarations: [
    UnitComponent,
    UnitHistoryComponent,
  ],
})
export class UnitModule {}
