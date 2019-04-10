/*global jQuery */

alert("Prototypes for the main jQuery() and init() are the same?" + (jQuery.prototype === jQuery.prototype.init.prototype ? " Yes." : "No"));
alert("init() constructed object will be instanceof jQuery?" + (jQuery.prototype.init.prototype.constructor  === jQuery &&
                                                                jQuery.prototype === jQuery.prototype.init.prototype ? " Yes." : "No"));
alert("Are you sure?" + ((new jQuery.prototype.init()) instanceof jQuery ? " Yes." : "No"));

var $pre = jQuery('pre');
