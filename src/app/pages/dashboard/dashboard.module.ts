import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';


import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';

import { TodoService } from './todo/todo.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Todo,
    Calendar,
    Dashboard,
  ],
  providers: [
    CalendarService,
    TodoService,
  ]
})
export class DashboardModule {
  color:string = 'aliceblue';
  changeStyle($event) {
    this.color = $event.type == 'mouseover' ? '':'aliceblue'
  }
}
