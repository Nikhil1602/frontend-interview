// The spread operator is used to expand elements of an array
// or object, while the rest operator is used to collect
// multiple values into a single array or object.

// Although both use the same syntax (...), their behavior
// depends on the context.

// Spread
// const newArr = [...arr];
// const newObj = {...obj};
// sum(...nums) // during function call

// Rest
// function fn(...args) {} // during function defined
// const [first, ...rest] = [1, 2, 3, 4];   // first -> 1, rest -> [2, 3, 4]
