import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module'
import {TodoComponent} from "../todo/todo.component";
import {MakerComponent} from "../todo/maker/maker.component";
import {ImportantComponent} from "../todo/important/important.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: Tab3Page}]),
    Tab3PageRoutingModule,
    ReactiveFormsModule,
  ],
    declarations: [Tab3Page ]
})
export class Tab3PageModule {}
