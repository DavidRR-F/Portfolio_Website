import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Event, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ContentComponent implements OnInit {

  routing: boolean = false;

  constructor(private contexts: ChildrenOutletContexts,
    private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        
      }

      if (event instanceof NavigationEnd) {
        
      }
      console.log(this.routing);
    });
  }

  prepareRoute(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
