import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {MakerComponent} from "../todo/maker/maker.component";
import {ImportantComponent} from "../todo/important/important.component";
import {OneTaskComponent} from "../todo/one-task/one-task.component";
import {TodoComponent} from "../todo/todo.component";
import {TodayComponent} from "../todo/today/today.component";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children:[
      {
        path: 'important',
        component:  ImportantComponent
      },
      {
        path: 'allTasks',
        component: TodoComponent,
        children:[

        ]
      },
      {
        path: 'today',
        component: TodayComponent,
      },
      {
        path: 'allTasks/maker',
        component: MakerComponent
      },
      {
        path: 'allTasks/:id/todo',
        component: OneTaskComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/allTasks'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
