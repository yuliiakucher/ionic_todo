import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../TodoModel";

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss'],
})
export class ImportantComponent implements OnInit {

  toDoData: TodoModel[] = [];


  constructor() {

  }
  ngOnInit() {
    this.toDoData = JSON.parse(localStorage.getItem('todos'))
  }

}
