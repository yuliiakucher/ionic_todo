import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../TodoModel";
import {Location} from "@angular/common";

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss'],
})
export class MakerComponent implements OnInit {

  toDo: FormGroup;
  data: Todo[] = [];
  done: boolean = true


  constructor(private formBuilder: FormBuilder, private _location: Location) {
    this.toDo = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', [Validators.required, Validators.pattern('')]],
      body: ['', [Validators.required, Validators.pattern('')]],
      type: ['', [Validators.required, Validators.pattern('')]],
      date:[''],
      checker: [false],
    });
  }


  createTask(toDo: FormGroup) {
    if (!localStorage.getItem('todos')){
      const arr = []
      arr.push(toDo.value);
      localStorage.setItem('todos', JSON.stringify(arr))
    } else {
      let json = localStorage.getItem('todos');
      const arr  = JSON.parse(json);
      arr.push(toDo.value);
      localStorage.setItem('todos', JSON.stringify(arr))
    }

    this._location.back();

  }

  ngOnInit() {}

}
