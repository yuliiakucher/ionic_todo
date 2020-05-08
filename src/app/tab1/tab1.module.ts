import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {TodoComponent} from "../todo/todo.component";
import {MakerComponent} from "../todo/maker/maker.component";
import {ImportantComponent} from "../todo/important/important.component";
import {OneTaskComponent} from "../todo/one-task/one-task.component";
import {TodayComponent} from "../todo/today/today.component";


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [Tab1Page,TodoComponent, MakerComponent, ImportantComponent, OneTaskComponent, TodayComponent],
})
export class Tab1PageModule {
}
