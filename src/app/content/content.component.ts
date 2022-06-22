import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Event, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { MotionPathPlugin } from 'gsap/all';
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

  animate() {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(CustomEase);
    gsap.to('.spaceship', {
      duration: 4, 
      ease: CustomEase.create("custom", "M0,0 C0.378,0.35 0.359,0.439 0.484,0.566 0.774,0.862 0.81,0.764 1,1 "),
      motionPath: {
        path: "#path",
        autoRotate: 90
      }
    });
  }

}
