import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoModel} from "../TodoModel";
import {Location} from "@angular/common";

@Component({
  selector: 'app-one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.scss'],
})
export class OneTaskComponent implements OnInit {

  task: TodoModel;

  constructor(private activatedRoute: ActivatedRoute, private _location: Location) {
    this.activatedRoute.params.subscribe(value => {
      let arr = JSON.parse(localStorage.getItem('todos'));
      let myArr = arr.values();
      for (let c of myArr) {
        if (c.id === +value.id){
          this.task = c
        }
      }
    })}




  ngOnInit() {}

    back() {
        this._location.back()
    }
}
