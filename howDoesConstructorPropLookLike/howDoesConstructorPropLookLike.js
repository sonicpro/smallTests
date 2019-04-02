function Thing() {
    this.value = 25;
}

var $ = (function () {
    // "enhanced constructor":
    var jQueryLikeConstructor = function() {
        return new jQueryLikeConstructor.prototype.init();
    };

    // Every "wrappedTojQueryLike" instance will have init function in its prototype chain.
    jQueryLikeConstructor.prototype = {
        constructor: jQueryLikeConstructor,
        // Real constructor for our "jQueryLike":
        init: function () {
            this.value = 35;
        }
    };

    // Setting the real constructor function prototype to our "enhanced constructor" prototype.
    // Makes the "wrappedTojQueryLike" instanceOf $.
    jQueryLikeConstructor.prototype.init.prototype = jQueryLikeConstructor.prototype;

    return jQueryLikeConstructor;
}());
