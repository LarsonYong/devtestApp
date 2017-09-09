import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Component({
  selector: 'history',
  templateUrl: './history.html',
})
export class UnitHistoryComponent {
  message= '';
  constructor(
    private http: Http,
  ) {
  }
  
}
