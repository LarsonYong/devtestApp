import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Injectable()
export class TodoService {
  constructor(private http: Http) {
  }

  private _todoList = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];

  getTodoList() {
    this.http.get('/api/getTodolist').map(res => {
      this._todoList = res.json().list;
      console.log("load TODO");
      console.log(this._todoList);
      
    }).subscribe();
    return this._todoList;
  }

  saveTodoList() {
    console.log(this._todoList);
  }
}
