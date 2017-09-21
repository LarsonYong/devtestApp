import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Component({
  selector: 'history',
  templateUrl: './history.html',
})
export class UnitHistoryComponent {
  message= '';
  Unit_List = ['1071', '12125', '12156', '13304', '31116'];
  UnitDetail= [{
    'UnitId': '',
    'Platform': '',
    'Camera': '',
  }];
  BuildHistory= [{
    '': '',
  }];

  getHistory = false;
  selectedUnit = String;
  constructor(
    private http: Http,
  ) {
  }




  select_unit(unitID) {
    console.log("1231231213");
    console.log(unitID);
    const reqSting = 'api/getUnit/' + unitID
    this.http.get(reqSting)
    .map(res => {
      this.UnitDetail = res.json()[0]; 
      console.log(this.UnitDetail);
      this.BuildHistory = res.json()[0].BuildHistory;
      console.log(this.BuildHistory);
      this.getHistory = true;
      this.selectedUnit = unitID;
    }).subscribe();
  }


  onChange(id) {
    console.log(id);
    this.select_unit(id);
  }


  add_updateTime(unitId, build, time) {
    const po = {
      'UnitId': unitId,
      'Build': build,
      'Time': time,
    };
    this.http.post('api/UpdateHistory', po).map(res => {
      this.BuildHistory = [];
      this.message = res.json().message;
      console.log(res.json().message);
      alert(res.json().message);
    }).subscribe();

    const reqSting = 'api/getUnit/' + this.selectedUnit;
    this.http.get(reqSting).map(res => {
      this.UnitDetail = res.json()[0]; 
      console.log(this.UnitDetail);
      this.BuildHistory = res.json()[0].BuildHistory;
      console.log(this.BuildHistory);
      this.getHistory = true;
    }).subscribe();
  }
}
