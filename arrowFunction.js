function Person() {
    this.age = 0;
    function increase() {
        this.age++;
    }
    // ES5 - even bind binds to "window".
    // setTimeout(increase.bind(this), 1000);

    // ES2015
    setInterval(() => {
    this.age++; // |this| properly refers to the person object
    }, 1000);
}
var p = new Person();
console.log(p.age);
const s = new Date().getSeconds();
while (true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log("Good, looped for 2 seconds")
        break;
    }
}
console.log(p.age);
