import { Component } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Component({
  selector: 'detail',
  templateUrl: './detail.html',
})
export class BuildDetailComponent {
  message= '';
  constructor(
    private http: Http,
  ) {
  }
  addnewbuild(buildversion) {
    this.http.post('api/build/add', { 'BuildId': buildversion })
      .map(res => {
        this.message = res.json().message;
        alert(this.message);
      }).subscribe();
  }
}
