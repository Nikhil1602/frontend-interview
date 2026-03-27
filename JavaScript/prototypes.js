// Every JavaScript object has a hidden property 
// called [[Prototype]], which points to another object.
// This is called its prototype.

// Prototype chaining is the process where JavaScript looks 
// for a property through a chain of linked objects (prototypes) 
// until it finds it or reaches null.

// Prototype inheritance is the mechanism in JavaScript where 
// one object can access properties and methods of another 
// object through the prototype chain.

// 👇 Prototype Inheritance 

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const user = new Person("Nikhil");
user.sayHello();    // Hello Nikhil


// 👇 Prototype Chaining 

let grandParent = {
    house: "villa"
};

let parent = {
    car: "BMW"
};

let child = {
    bike: "Yamaha"
};

// Creating chain
parent.__proto__ = grandParent;
child.__proto__ = parent;

console.log(child.house); // villa