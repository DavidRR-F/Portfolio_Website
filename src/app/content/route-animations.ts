import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home => About', slideRight()),
    transition('Home => Resume', slideRight()),
    transition('About => Resume', slideRight()),
    transition('About => Home', slideLeft()),
    transition('Resume => About', slideLeft()),
    transition('Resume => Home', slideLeft()),
  ]);

function slideRight() {
    return [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1s cubic-bezier(.64,-0.62,.45,1.35)', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('1s cubic-bezier(.64,-0.62,.45,1.35)', style({ left: '0%' }))
        ]),
      ]),
    ];
}

function slideLeft() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s cubic-bezier(.64,-0.62,.45,1.35)', style({ right: '100%' }))
      ]),
      query(':enter', [
        animate('1s cubic-bezier(.64,-0.62,.45,1.35)', style({ right: '0%' }))
      ]),
    ]),
  ];
}