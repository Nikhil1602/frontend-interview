// A constructor function is a function used with the new 
// keyword to create multiple objects, where this refers 
// to the newly created object and properties are assigned 
// to it.

// ====================================================>
// Basic Example without methods
// ====================================================>

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new Person("Nikhil", 22);
const user2 = new Person("Raj", 25);

console.log(user1.name); // Nikhil
console.log(user2.age);  // 25

// ====================================================>
// Basic Example with methods
// ====================================================>

function Person2(name) {
    this.name = name;
}

Person2.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const user = new Person2("Nikhil");
user.sayHello();

// 👉 Constructor functions start with capital letter (important in interviews)