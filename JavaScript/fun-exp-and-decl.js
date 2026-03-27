// A function declaration or statement is defined using the
// function keyword and is hoisted, so it can be called
// before its definition.

// A function expression is assigned to a variable and is not
// hoisted in the same way, so it can only be called after it
// is defined.

// Declaration or Statement
function add(a, b) {
    return a + b;
}

// Expression
const add2 = function (a, b) {
    return a + b;
};