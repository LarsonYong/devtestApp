import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    if (!values ) return [];
    if (!filter) return values;
    return values.filter(v => v.indexOf(filter) >= 0);
  }
}

@Component({
  selector: 'list',
  templateUrl: './buildList.html',
})
export class BuildListComponent {
  buildlist: any;
  filterString = '';
  buildNamelist = [];
  buildDetail = [
    { 'BuildVersion': '' },
    { 'Bug': '' },
    { 'BuildType': '' },
    { 'Description': '' },
    { 'TestDate': '' },
    { 'TestDeatils': '' },
    { 'TestResult': '' },
    { 'TestType': '' },
    { 'TestUnits': '' },
  ];
  detailClicked = false;
  list = ['123', '321'];
  constructor(
      private http: Http,

  ) {
    this.getBuildlist();
  }
  
  getBuildlist() {
    this.http.get('api/getBuildlist')
      .map(res => {
        this.buildlist = res.json();
        for (let list of this.buildlist ) {
          this.buildNamelist.push(list.BuildVersion);
        } 
      }).subscribe();
  }

  getbuildinfo(buildversion) {
    this.detailClicked = true;
    this.buildDetail = [];
    this.http.get('api/getBuild/' + buildversion)
      .map(res => {
        this.buildDetail = res.json()[0];
        console.log(this.buildDetail);
      }).subscribe();
  }
}
