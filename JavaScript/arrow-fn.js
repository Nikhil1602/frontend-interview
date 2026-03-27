// Arrow functions are a shorter syntax for writing functions 
// in JavaScript and differ from normal functions because 
// they don’t have their own this, instead inheriting it 
// from their surrounding scope.

// It doesn't support hoisting behavior and arguments object 
// unlike normal functions.

const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

// ====================================================>
// Example within object
// ====================================================>

const obj = {
    name: "Nikhil",
    show: () => {
        console.log(this.name);
    }
};

const obj2 = {
    name: "Nikhil",
    show: function () {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};

obj.show(); // undefined ❗          
obj2.show(); // Nikhil ✅         


// ====================================================>
// Example with arguments
// ====================================================>

const test = () => {
    console.log(arguments); // ❌ Error
};

// ====================================================>
// Example with hoisting
// ====================================================>

sayHi(); // ❌ Error

const sayHi = () => {
    console.log("Hi");
};