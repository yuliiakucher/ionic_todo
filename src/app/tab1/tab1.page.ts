import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pages = [
    {
      title: 'All tasks',
      url:'/allTasks',
      icon: "albums-outline"
    },
    {
      title: 'Today',
      url:'/today',
      icon: "today-outline"

    },
    {
      title: 'Important',
      url:'/important',
      icon: "alert-outline"
    },
  ];




  constructor() {

  }

}
