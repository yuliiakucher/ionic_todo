import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./TodoModel";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {


    toDoData: TodoModel[] = [];


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.toDoData = JSON.parse(localStorage.getItem('todos'))
    }


    doRefresh(refresher) {

        setTimeout(() => {
            console.log('Async operation has ended');
            this.toDoData = JSON.parse(localStorage.getItem('todos'));
            refresher.target.complete()
        }, 500);
    }

    Done(id: number) {

      let arr = JSON.parse(localStorage.getItem('todos'));
      let myArr = arr.values();
      for (let c of myArr) {
        console.log(c)
      }
      localStorage.setItem('todos',JSON.stringify(arr))
    }

    navigate(data: TodoModel) {
        this.router.navigate(
            [data.id, 'todo'],
            {relativeTo: this.activatedRoute}
        )
    }

    make() {
        this.router.navigate(['maker'],{relativeTo: this.activatedRoute});

    }
}


