import { Component, OnInit } from '@angular/core';
import { BaThemeConfigProvider } from '../../../theme';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';
import { TodoService } from './todo.service';
import { WebApiPromiseService } from '../../../services/web-api-promise-service';

@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss'],
})
export class Todo implements OnInit{
  received= [];
  dashboardColors = this._baConfig.get().colors.dashboard;
  result: string[];
  todoList = [];
  newTodoText: string = '';
  todoList1= [];


  constructor(
    private _baConfig: BaThemeConfigProvider,
    private _todoService: TodoService,
    private http: Http,
    private moviPromiseService: WebApiPromiseService,
  ) {
     
    // this.todoList = this._todoService.getTodolist();
    // console.log('WTF why not in here?', this.todoList);
    //
    // this.todoList.forEach((item) => {
    //   item.color = this._getRandomColor();
    // });
  }

  ngOnInit() {
    this.moviPromiseService.getService('/api/getTodolist')
      .then(result => {
        this.todoList = result;
        console.log('WTF: ', result);
      })
      .catch(error => console.log(error));
    console.log('WTF why not in here?', this.todoList);
    this.todoList.forEach((item) => {
        item.color = this._getRandomColor();
    });
  }

  getNotDeleted() {
    return this.todoList.filter((item: any) => {
      return !item.deleted;
    });
  }

  // getTodolist () {
  //   this.http.get('/api/getTodolist').map((data: any) => {
  //     data = data.json()[0].list[0];
  //     return data;
  //   }).subscribe( (data: any) => {
  //         this.receivedlist = data;
  //         console.log("I can see the data here: ", this.receivedlist);
  //       })
  // }

  deleteFun(item) {
    item.deleted = true;
    console.log("item: ", item);
    console.log("text: ", item.text);
    console.log("list: ", this.todoList[0].text);
    for (let i = 0, len = this.todoList.length; i < len - 1; i++) {
      console.log("1232312");
      if (this.todoList[i].text == item.text) {
          this.todoList[i].text = '';
      }
    }
    this._todoService.saveTodoList(this.todoList)
  }

  addToDoItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {

      this.todoList.unshift({
        text: this.newTodoText,
        color: this._getRandomColor(),
      });
      this.newTodoText = '';
      console.log("Saved list: ", this.todoList);
      this._todoService.saveTodoList(this.todoList);
    }
  }

  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);
    let i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}
