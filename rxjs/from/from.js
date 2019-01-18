/*global rxjs */

const { from } = rxjs;

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));
