(function (foo, bar) {
	console.log(typeof arguments); // ?
	
	arguments[0] = 42;
	console.log(foo); // ?
})(10, 20);
