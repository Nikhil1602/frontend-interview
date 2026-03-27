// IIFE is a function that is defined and executed immediately, 
// mainly used to create a private scope and avoid polluting 
// the global namespace.

// =====================================================>
// Basic Syntax
// =====================================================>
(function () {
    console.log("IIFE executed");
})();

// =====================================================>
// IIFE with Parameters
// =====================================================>

(function (name) {
    console.log("Hello " + name);
})("Nikhil");

// =====================================================>
// IIFE with Arrow Function
// =====================================================>

(() => {
    console.log("Arrow IIFE");
})();