// Function Currying is a technique where a function that takes
// multiple arguments is converted into a series of functions
// that each take one argument.

const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));  //  6

function mul(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log(mul(2)(3)(4));  // 24