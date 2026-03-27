// A generator function is a special function in JavaScript 
// that can pause and resume execution using yield, returning 
// an iterator that produces values one at a time.

function* counter() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}

function* ids() {
    let id = 1;
    while (true) {        // No, issue at all you can use like this
        yield id++;
    }
}

const gen = counter();

console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }