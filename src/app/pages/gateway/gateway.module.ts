import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GatewayComponent } from './gateway.component';
import { routing } from './gateway.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    GatewayComponent,
  ],
})
export class GatewayModule {}
