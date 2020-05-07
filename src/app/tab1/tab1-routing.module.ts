import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {MakerComponent} from "../todo/maker/maker.component";
import {ImportantComponent} from "../todo/important/important.component";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'maker',
    component: MakerComponent
  },
  {
    path: 'important',
    component:  ImportantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
