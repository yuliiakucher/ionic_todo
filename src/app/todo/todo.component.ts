import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "./TodoModel";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  host: {
    '(document:storage)': 'onStorageChange($event)'
  }
})
export class TodoComponent implements OnInit {



  toDoData: Todo[] = [];
  $event: any;


  constructor() {

  }
  ngOnInit() {
    this.toDoData = JSON.parse(localStorage.getItem('todos'))
  }

  onStorageChange($event: any) {

  }

  doRefresh(refresher) {

    setTimeout(() => {
      console.log('Async operation has ended');
      this.toDoData = JSON.parse(localStorage.getItem('todos'));
      refresher.target.complete()
    }, 500);
  }

  Done(id: number) {
    let json = localStorage.getItem('todos');
    const arr  = JSON.parse(json);
    arr[id-1].checker = !arr[id-1].checker
    localStorage.setItem('todos', JSON.stringify(arr))
  }
}


