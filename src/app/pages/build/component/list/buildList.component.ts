import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Component({
  selector: 'list',
  templateUrl: './buildList.html',
})
export class BuildListComponent {
  buildlist: any;
  constructor(
      private http: Http,

  ) {
    this.getBuildlist();
    console.log("111");
    
  }
  getBuildlist() {
    this.http.get('api/getBuildlist')
      .subscribe(
        (data) => (this.buildlist = data.json()),
      );
  }
  console.log(buildlist);
}
