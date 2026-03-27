// The micro-task queue is similar to the callback queue but has
// higher priority in terms of execution and stores tasks like:
// Promise, queueMicrotask(), and MutationObserver.

// +-----------------------------------+
// | timer1() | timer2() |             |
// +-----------------------------------+
//           TASK QUEUE

// +-----------------------------------+
// | task1() |                         |        --> Executes first (Higher Priority)
// +-----------------------------------+
//           MICRO-TASK QUEUE

let timer1 = () => setTimeout(() => {
    console.log("timer1 called...");
}, 0);

let timer2 = () => setTimeout(() => {
    console.log("timer2 called...");
}, 500);

let task1 = () => new Promise((res) => res("task1() called..."));

timer1();
timer2();
task1().then((res) => console.log(res));    // called first