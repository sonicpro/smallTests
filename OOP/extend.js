function extend(Child, Parent) {
    // Declare private function just to not create
    // a Parent instance as a prototype.
    var F = function () {};
    F.prototype = Parent.prototype;
    // Child won't inherit the properties that are defined in Parent constructor.
    Child.prototype = new F();
    // We do not want F as a Child instances constructor, replace it by the Child itself.
    Child.prototype.constructor = Child;
    // "superclass" property is for the convenient superclass hidden methods call.
    Child.superclass = Parent.prototype;
}

// Example of usage:
function Animal() {
    this.creep = function () {
        alert("I'm creeping...");
    };
}

function Rabbit() {
    // Important! To create superclass members, do not forget to call the superclass constructor.
    Rabbit.superclass.constructor.apply(this);
}

extend(Rabbit, Animal);


// Rabbit shared methods.
Rabbit.prototype.run = function () {
    alert("I'm running...");
};

var rabbit = new Rabbit();
rabbit.creep();
rabbit.run();

var rabbit2 = new Rabbit();

alert("Will 'Superclass' instance methods be shared?" +
      (rabbit.creep === rabbit2.creep ? " Yes" : " No"));

