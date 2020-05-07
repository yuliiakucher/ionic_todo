import { Component, OnInit } from '@angular/core';
import {Todo} from "../TodoModel";

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss'],
})
export class ImportantComponent implements OnInit {

  toDoData: Todo[] = [];


  constructor() {

  }
  ngOnInit() {
    this.toDoData = JSON.parse(localStorage.getItem('todos'))
  }

}
