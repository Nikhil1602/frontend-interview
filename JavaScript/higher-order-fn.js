// Functions that either accepts another function as an argument
// or returns a function as its result are considered to be
// Higher-Order function.

function greet(name) {

    return `Hello ${name}`;

}

function processUser(cb) {

    console.log(cb("nikhil"));

}

processUser(greet);