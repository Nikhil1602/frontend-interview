// Callback Queue (Task Queue or MacroTask Queue) stores callbacks from
// asynchronous operations such as: setTimeout, setInterval, DOM events
// and some API responses.

// +-----------------------------------+
// | timer1() | timer2() |             |
// +-----------------------------------+
//           TASK QUEUE

let timer1 = () => setTimeout(() => {
    console.log("timer1 called...");
}, 0);

let timer2 = () => setTimeout(() => {
    console.log("timer2 called...");
}, 500);

timer1();
timer2();