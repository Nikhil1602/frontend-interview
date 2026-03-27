// A normal function in JavaScript is defined using the 
// function keyword, has its own this context, supports 
// hoisting (in declarations), and includes an arguments 
// object.

// ===================================================>
// 👇 Basic Example with arguments
// ===================================================>

function sum(a, b) {

    return a + b;

}

console.log(sum(4, 5)); // 9

// ===================================================>
// 👇 function method
// ===================================================>

const obj = {

    name: "Nikhil",

    show: function () {
        console.log(this.name);
    }

};

obj.show(); // Nikhil

// ===================================================>
// 👇 hoisting
// ===================================================>

sayHi(); // ✅ works

function sayHi() {
    console.log("Hi");
}

// ===================================================>
// 👇 universal arguments object
// ===================================================>

function test() {
    console.log(arguments);
}

test(1, 2, 3);