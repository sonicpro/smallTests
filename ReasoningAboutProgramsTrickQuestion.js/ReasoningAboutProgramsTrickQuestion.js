// Example 1 from http://fsharpforfunandprofit.com/posts/is-your-language-unreasonable/

function DoSomething (foo) { x = false; }

var x = 2;
DoSomething(x);

// What value is y? 
var y = x - 1;
console.log(y);
