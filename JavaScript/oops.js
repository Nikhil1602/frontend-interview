// OOP (Object Oriented Programming) is a programming pattern 
// where we design programs using classes and objects.
// It helps in organizing code using concepts like:

// 1. Encapsulation
// Binding data & methods together inside a class and restricting
// direct access to some data.

// 2. Inheritance
// Allows a class to reuse properties and methods from another
// class.

// 3. Polymorphism
// The same method behaves differently depending on the object.

// 4. Abstraction
// Hiding Complex implementation details and exposing only
// necessary functionality.

class Vehicle {

    #speed = 0;

    constructor(name) {
        this.name = name;
    }

    accelerate(amount) {
        this.#speed += amount;
    }

    getSpeed() {
        return this.#speed;
    }

    start() {
        console.log(this.name + " started!");
    }

}

class Car extends Vehicle {

    constructor(name, brand) {
        super(name);
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " car engine started!");
    }

}

const car1 = new Car("MyCar", "Toyota");
car1.start();
car1.accelerate(50);
console.log(car1.getSpeed());

// here, accelerate(), getSpeed(), start() are Encapsulated inside Vehicle class.
// Car class Inherits Vehicle class.
// there were two same methods inside Vehicle and Car class but has different working it's polymorphism.
// the inner working of methods hides complex logics this is abstraction.