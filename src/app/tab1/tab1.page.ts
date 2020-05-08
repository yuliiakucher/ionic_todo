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
      title: 'important',
      url:'important'
    }
  ]

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url
    })
  }

}
