/*global $ */
$("#div1").data("three", 3);
$("#div1").data("four", "four");

// Put the breakpoint here and check for jQuery.cache property.
// An element that is the subject of .data() method has a property with the key of jQuery.expando and the value of the data id in jQuery.cache object.
// See https://learn.javascript.ru/memory-leaks-jquery for the details.
console.log($("#div1").data("three"));
console.log($("#div1").data("four"));
var object1 = { val1: 3, val2: "hi" };
$("#div1").data("object1", object1);
console.log(object1 === $("#div1").data("object1"));
