/*global rxjs */

const { interval } = rxjs;
const { take } = rxjs.operators;
const source$ = interval(1000).pipe(take(3)); // 0, 1, 2
// waits 3 seconds, then logs "2", i.e. the last emitted from Observable.
source$.toPromise().then(value => console.log(value))
    .catch(err => {
        console.log("An error occurred while getting the data.");
        if (err) {
            console.log("Error: " + err);
        }
    });
