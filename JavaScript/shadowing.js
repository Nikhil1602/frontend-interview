// Shadowing in JavaScript occurs when a variable in an 
// inner scope has the same name as one in an outer scope, 
// hiding the outer variable within that scope.

let a = 10;

function test() {
    let a = 20; // inner "a" has shadows the outer "a"
    console.log(a); // 20
}

test();

// 👇 Illegal Shadowing

// let b = 10;

// {
//   var b = 20; // ❌ Error
// }