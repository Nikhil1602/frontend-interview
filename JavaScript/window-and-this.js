// In a browser, the window object is the global object.

// 👉 That means:

// It represents the browser itself
// It contains everything globally available in JS

// console.log(window); // It will console only on browsers

// The "this" keyword refers to "who is calling the function".
// That means it's value depends on how function is called.
// In normal function "this" refers to the global object
// or undefined in strict mode, for object methods it refers
// to objects, in class methods it refers to class instance.

// console.log(this);  // it returns {} in node js, and global object in browsers