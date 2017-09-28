import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { WebApiPromiseService } from '../../../services/web-api-promise-service';
import 'rxjs/add/operator/map'
import { CalendarService } from './calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss']
})
export class Calendar {
    eventsss= [
            {
              title: 'All Day Event',
              start: '2017-09-01',
            },
            {
              title: 'Long Event',
              start: '2017-09-07',
              end: '2017-09-10',
            },
            {
              title: 'Dinner',
              start: '2017-09-14T20:00:00',
            },
            {
              title: 'Birthday Party',
              start: '2017-09-01T07:00:00',
            }
          ];
  public calendarConfiguration: any;
  private _calendar: Object;
  receivedEvent = [];


  constructor(
    private _calendarService: CalendarService,
    private movePromiseService: WebApiPromiseService
  ) {
    this._calendarService.readEvent(this.receivedEvent);
    this.calendarConfiguration = this._calendarService.getData();


    this.receivedEvent.forEach( (item) => {
        this.calendarConfiguration.events.push(item);
    })

    // this.readEvent(this.receivedEvent);
    // console.log(this.receivedEvent);
    // this.calendarConfiguration.events.push(this.receivedEvent);
    // this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

  ngOnInit() {
    
    // this.calendarConfiguration = this._calendarService.getData();
    // this.movePromiseService.getService('/api/getEvents')
    // .then(result => {
    //   this.receivedEvent = result; 
    //   this.receivedEvent.forEach((item) => {
    //     this.calendarConfiguration.events.push(item);
    //   })
    // })
    // .catch(error => console.log(error));
    console.log(this.eventsss);
    console.log(this.calendarConfiguration.events);
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      let title = prompt('Event Title:');
      let eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
      console.log("Added event: ", eventData)
    }
  }
}
