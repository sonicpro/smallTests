/*global $ */
$("#div1").data("three", 3);
$("#div1").data("four", "four");

// It seems that in jQuery2 an element that is the subject of .data() method has a property with the key of jQuery.expando
// and the value of an object that contains the data stored in the element.
// This is unlike jQuery1, where only id of the cached data is stored in element[jQuery.expando] property.
console.log($("#div1").data("three"));
console.log($("#div1").data("four"));
var object1 = { val1: 3, val2: "hi" };
$("#div1").data("object1", object1);
console.log(object1 === $("#div1").data("object1"));
