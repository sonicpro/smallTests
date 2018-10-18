/*global rxjs */
const { fromEvent, interval } = rxjs;
const { exhaustMap, take } = rxjs.operators;

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap((ev) => interval(1000).pipe(take(5)))
);
const subscription = result.subscribe(x => console.log(x));
window.onload = function() {
    document.getElementsByTagName("button")[0].addEventListener("click", subscription.unsubscribe.bind(subscription));
};
