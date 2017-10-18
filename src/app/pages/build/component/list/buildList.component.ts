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
  testResult = [];
  buildEdit = [
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
  body = [
    
  ];
  message = '';
  detailClicked = false;
  editClicked = false;
  
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
    this.editClicked = false;
    this.buildDetail = [];
    this.testResult = [];
    this.http.get('api/getBuild/' + buildversion)
      .map(res => {
        this.buildDetail = res.json()[0];
        console.log(this.buildDetail);
        
        this.testResult = res.json()[0].TestResult.replace(/(?:\r\n|\r|\n)/g, '<br /><br />')
        
      }).subscribe();
  }
  editbuildinfo(buildversion) {
    this.detailClicked = false;
    this.editClicked = true;

    this.http.get('api/getBuild/' + buildversion)
    .map(res => {
      this.buildEdit = res.json()[0]; 
      console.log(this.buildEdit);
    }).subscribe();
    
  }
  savebuildinfo(id, buildversion, buildtype, description, testtype, testdate, testunits, testdetails, bug, testresult) {
    this.body = [];  
    this.body.push({
      'BuildVersion': buildversion,
      'id': id,
      'BuildType': buildtype,
      'Bug': bug,
      'Description': description,
      'TestType': testtype,
      'TestDate': testdate,
      'TestUnits': testunits,
      'TestDetails': testdetails,
      'TestResult': testresult,
    });
    console.log("body", this.body[0]);
    
    this.http.post('api/updateBuild', this.body[0])
      .map(res => {
        this.message = res.json().message;
        alert(this.message);
      }).subscribe();
    console.log("111", this.message);
    
  }
}

