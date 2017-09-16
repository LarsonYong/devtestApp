import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Component({
  selector: 'history',
  templateUrl: './history.html',
})
export class UnitHistoryComponent {
  message= '';
  Unit_List = ['1071', '12125', '12156', '13304', '31116'];
  constructor(
    private http: Http,
  ) {
  }
  select_unit(unitID) {
    console.log(unitID);
  }
  
}
