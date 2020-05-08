import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../TodoModel";
import {Location} from "@angular/common";

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss'],
})
export class ImportantComponent implements OnInit {

  important: TodoModel[] =[];


  constructor(private _location: Location) {
    let arr = JSON.parse(localStorage.getItem('todos'));
    let myArr = arr.values();
    for (let c of myArr) {
      if (c.type === 'high'){
        this.important.push(c)
      }
    }
  }


  ngOnInit() {}

  back() {
    this._location.back()
  }

}
