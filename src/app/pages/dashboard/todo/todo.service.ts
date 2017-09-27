import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';

@Injectable()
export class TodoService {
  receivedlist = [];
  constructor(private http: Http) {
  }
  private _todoList = [];

  // private _todoList = [
  //   { text: '333' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  //   { text: '' },
  // ];

  getTodolist () {
      // this.http.get('/api/getTodolist').map((data: any) => {
      //     data = data.json();
      //     this._todoList = data;
      //     console.log('WTF why is here? ', this._todoList);
      // }).subscribe();
      fetch('/api/getTodolist').then((response) => {
        return response.json();
      }).then(data => {
        this._todoList = data;
        console.log("WTF is here?", this._todoList);
      }).catch((ex) => {
        console.log('Error fetching todo', ex)
      });

      console.log('WTF not in service? ', this._todoList);
      return this._todoList;
  }

  saveTodoList(list) {
    // console.log(,this._todoList);
    console.log('Save todo list: ', list)
  }

  
}
