var es6 = new Map;

es6.set("edition", 6);
es6.set(262, "standard");
es6.set(undefined, "nah");	// Key is undefined.

var hello = function(){
				console.log("hello");
			};
es6.set(hello, "Hello ES6!");	// Key is function.

console.log("Value of 'edition' exists? " + es6.has("edition"));// true
console.log("Value of 'year' exists? " + es6.has("years"));		// false
console.log("Value of 262 exists? " + es6.has(262));			// true
console.log("Value of undefined esists? " + es6.has(undefined));// true
console.log("Value of hello() exists? " + es6.has(hello));		// true

es6.delete(undefined);
console.log("Value of undefined esists? " + es6.has(undefined));// false

console.log(es6.get(hello));	// Hello ES6!
console.log("Work is in progress for ES" + es6.get("edition"));	// Work is in progress for ES6
