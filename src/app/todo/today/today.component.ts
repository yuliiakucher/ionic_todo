import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {TodoModel} from "../TodoModel";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {

  todayTasks: TodoModel[] =[];
  d: string

  constructor(private _location: Location) {
    let arr = JSON.parse(localStorage.getItem('todos'));
    let myArr = arr.values();
    for (let c of myArr) {
      let d = c.date
      if(!!d.match(/2020-05-08/g)){
        this.todayTasks.push(c)
      }
      }
    }


  ngOnInit() {}

    back() {
        this._location.back()
    }
}
