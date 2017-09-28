import { Injectable } from '@angular/core';
import { BaThemeConfigProvider } from '../../../theme';
import { WebApiPromiseService } from '../../../services/web-api-promise-service';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Injectable()
export class CalendarService {
  receivedEvent = [];
  Events : any;
  constructor(
    private _baConfig: BaThemeConfigProvider,
    private movePromiseService: WebApiPromiseService,
    private http: Http
  ) {
    this.movePromiseService.getService('/api/getEvents')
    .then(result => {
      this.receivedEvent = result; 
      this.receivedEvent.forEach((item) => {
        this.Events.push(item);
      })
    })
    .catch(error => console.log(error));
    console.log("WTF: ", this.Events)
  }

  getData() {
    
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-09-01',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: []
      // events: [
      //   {
      //     title: 'All Day Event',
      //     start: '2017-09-01',
      //     color: dashboardColors.silverTree
      //   },
      //   {
      //     title: 'Long Event',
      //     start: '2017-09-07',
      //     end: '2017-09-10',
      //     color: dashboardColors.blueStone
      //   },
      //   {
      //     title: 'Dinner',
      //     start: '2017-09-14T20:00:00',
      //     color: dashboardColors.surfieGreen
      //   },
      //   {
      //     title: 'Birthday Party',
      //     start: '2017-09-01T07:00:00',
      //     color: dashboardColors.gossip
      //   }
      // ]
    //   dashboard: {
    //     blueStone: '#005562',
    //     surfieGreen: '#0e8174',
    //     silverTree: '#6eba8c',
    //     gossip: '#b9f2a1',
    //     white: '#10c4b5',
    //   },
    };
  }

  readEvent(receivedEvent) {
    this.http.get('/api/getEvents')
        .map(res => res.json())
        .finally( () => console.log("Finally callback"))
        .subscribe(
            data => receivedEvent,
            error => console.log(error),
            () => console.log("completed", receivedEvent)
        );
    return receivedEvent
  }  

  saveEvent(eventData) {

  }
}
