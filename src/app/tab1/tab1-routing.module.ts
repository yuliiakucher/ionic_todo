import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {MakerComponent} from "../todo/maker/maker.component";
import {ImportantComponent} from "../todo/important/important.component";
import {OneTaskComponent} from "../todo/one-task/one-task.component";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children:[
      {
        path: 'important',
        component:  ImportantComponent
      }
    ]
  },
  {
    path: 'maker',
    component: MakerComponent
  },
  {
    path: ':id/todo',
    component: OneTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
