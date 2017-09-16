import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UnitComponent } from './unit.component';
import { routing } from './unit.routing';
import { UnitHistoryComponent } from './component/history/history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgbDropdownModule,
    
  ],
  declarations: [
    UnitComponent,
    UnitHistoryComponent,
  ],
})
export class UnitModule {}
