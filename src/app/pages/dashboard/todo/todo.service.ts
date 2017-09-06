import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

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
    return this._todoList;
  }
}
