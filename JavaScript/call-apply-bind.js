// call(), apply(), bind() are methods used to control the value
// of this inside a function.

// call() invokes the function immediately and allows you to pass
// arguments one by one.

// apply() is almost the same as call(), but arguments are passed
// as an array.

// bind() does not execute the function immediately, return a new
// function with "this" as permanently set.

const person1 = {
    name: "Nikhil"
};

function greet(city, state) {
    console.log(this.name + " from " + city + ", " + state);
}

// call()
greet.call(person1, "Ahmedabad", "Gujarat");

// apply()
greet.apply(person1, ["Bangalore", "Karnataka"]);

// bind()
const greetUser = greet.bind(person1);
greetUser("Mumbai", "Maharashtra");