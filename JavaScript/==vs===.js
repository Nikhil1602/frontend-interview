// Type coercion in JavaScript is the automatic or implicit 
// conversion of values from one data type to another, 
// usually when performing operations between different 
// types.

// "==" compares values after performing type coercion, 
// which can lead to unexpected results, whereas "===" 
// compares both value and type without coercion, 
// making it more predictable and safer to use.

// "==" --> checks for same value
// "===" --> checks for same value and datatype.

console.log(5 == "5");     // true
console.log(true == 1);    // true
console.log(null == undefined); // true

console.log(5 === "5");    // false
console.log(true === 1);   // false
console.log(null === undefined); // false