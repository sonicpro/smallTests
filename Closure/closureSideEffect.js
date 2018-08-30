var callbacks = [];
for (var i = 0; i < 2; i++) {
callbacks.push(function() {
	console.log(i);
	console.log();
});
}
for (var x = 0; x < callbacks.length; x++) {
	callbacks[x]();
}
