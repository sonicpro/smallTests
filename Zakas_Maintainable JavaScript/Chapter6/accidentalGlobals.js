/*global console */
/*jshint immed:true, eqeqeq:true */
function doSomething() {
    var count = 10;
    name = 'Nicholas'; // Bad: global
}

function rigorousErrorHandling() {
    'use strict';
    foo = 10;
}
rigorousErrorHandling(); // causes error in the environment supporting strict mode.


var a = new 10();

// Rhino: Can't use 'in' on a non-object.
if ('prop' in true) {
    console.log('success');
}
