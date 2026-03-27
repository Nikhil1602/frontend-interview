// Functions that can be assigned to variables, passed as an 
// arguments, returned from other functions, and stored in data
// structures are called first-class functions, they treated like
// any other value which we call it first-class citizens.

// =====================================================>
// Assign Function to a Variable
// =====================================================>

const greet = function () {
    console.log("Hello");
};

greet(); // Hello

// =====================================================>
// Pass Function as Argument
// =====================================================>

function sayHi() {
    console.log("Hi");
}

function execute(fn) {
    fn();
}

execute(sayHi);

// =====================================================>
// Return Function from Another Function
// =====================================================>

function outer() {
    return function () {
        console.log("Inside inner function");
    };
}

const innerFn = outer();
innerFn();

// =====================================================>
// Store Function in Data Structures
// =====================================================>

const arr = [
    function () { console.log("A"); },
    function () { console.log("B"); }
];

arr[0](); // A