// Closure is the ability of a function to remember its outer
// scope variables even after outer function has finished 
// execution.

// 👇 Simple Example

function createCounter() {

    let count = 0;  // outer scope count

    return function () {
        count++;        // count remebers its outer scope
        console.log(count);
    };

}

const counter = createCounter();

counter();  // 1
counter();  // 2
counter();  // 3


// 👇 React useState Example

function createState(initialValue) {

    let state = initialValue;

    function getState() {
        return state;
    }

    function setState(newValue) {
        state = newValue;
    }

    return [getState, setState];
}

const [getCount, setCount] = createState(0);

console.log(getCount()); // 0

setCount(5);
console.log(getCount()); // 5