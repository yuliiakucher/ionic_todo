import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {TodoModel} from "../TodoModel";
import {split} from "ts-node";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {

  todayTasks: TodoModel[] =[];
  d: string
  today = new Date

  constructor(private _location: Location) {

    let arr = JSON.parse(localStorage.getItem('todos'));
    let myArr = arr.values();
    for (let c of myArr) {
      let d = c.date
      if(!!d.match(this.today.toISOString().split('T')[0])){
        this.todayTasks.push(c)
      }
      }
    }


  ngOnInit() {}

    back() {
        this._location.back()
    }
}
