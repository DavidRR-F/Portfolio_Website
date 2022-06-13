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
    transition('* <=> *', slideDown())
  ]);

function slideDown() {
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
      style({ top: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s cubic-bezier(.64,-0.62,.45,1.35)', style({ top: '100%' }))
      ]),
      query(':enter', [
        animate('1s cubic-bezier(.64,-0.62,.45,1.35)', style({ top: '0%' }))
      ]),
    ]),
  ];
}