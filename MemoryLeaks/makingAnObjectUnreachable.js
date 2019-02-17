// Try to find this Object in HEAP SNAPSHOT before and after it is made unreachable.
var father = {
    name: "Василий"
};

// This variable contains an object that in turn contains two objects that mutually referenced.
// The variable is reachable from global object (window).
var family = marry(
    father,
    {
        name: "Мария"
    });


// Then cut the references from family to father and also from mother to father.
// This cause father to be Garbage Collected despite the reference it holds to mother.
delete family.father;
delete family.mother.husband;


function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    };
}
