'use strict'

function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;

    setInterval(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
    }, 1000);
}

function Person2() {
    var self = this; // Some choose `that` instead of `self`.
                     // Choose one and be consistent.
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}

function Person3(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
}, 1000);
}

var p = new Person();
var p2 = new Person2();
var p3 = new Person3();