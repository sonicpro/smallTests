/*global rxjs */
const { fromEvent, interval } = rxjs;
const { map, mergeAll } = rxjs.operators;

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map((ev) => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());
const subscription = firstOrder.subscribe(x => console.log(x));
window.onload = function() {
    document.getElementsByTagName("button")[0].addEventListener("click", subscription.unsubscribe.bind(subscription));
};
