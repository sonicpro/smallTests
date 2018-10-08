/*global rxjs */
const { fromEvent, interval } = rxjs;
const { withLatestFrom } = rxjs.operators;

const keypress$ = fromEvent(document, "click");
const timer$ = interval(1000);
const result$ = keypress$.pipe(
    withLatestFrom(timer$)
);
result$.subscribe(value => console.log(value));
