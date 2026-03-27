// Hoisting is a Javascript behavior where variables and function
// declarations are moved to the top of their scope during the
// creation phase of execution context. Because of this, functions
// can be called before they are defined, and variables declared
// with "var" return "undefined", if they accessed before
// assignment.

// In case of "let" and "const" variables, they hoisted in 
// difference scope which is called temporal dead zone.

// Temporal dead zone is a period between a "let" and "const"
// variable is hoisted and when it's initialized. During this
// time, the variable cannot be accessed and doing it so throws
// a reference error.

// E.g., 

console.log(a); // undefined
console.log(fun()); // Hi

var a = "Hello";
function fun() { console.log("Hi"); }

console.log(b); // ❌ Reference Error

let b = 3;


// ==============================================>
// 👇 INTERNAL WORKING OF ABOVE CODE:
// ==============================================>

// var a = undefined; // javascript default behaviour for "var"
// let b;                                               ---
//                                                         |
// function fun() { console.log("Hi"); }                   |
//                                                         |
// console.log(a);  // undefined                           |____ Temporal Dead Zone for "b"
// fun(); // Hi                                            |
// console.log(b); // Error since, it has no value         |
//                                                         |
// b = 3;                                                  |
//                                                      ---

