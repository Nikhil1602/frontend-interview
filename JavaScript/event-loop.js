// Event loop is a mechanism in javascript that continously checks
// the call stack and task queues. When the call stack becomes empty,
// This allows javascript to handle asynchronous operations even though
// it runs on a single thread.

// To understand visually go to this link - https://www.youtube.com/watch?v=eiC58R16hb8

console.log("Synchronous Task: 1");

setTimeout(() => console.log("Asynchronous Task: 1"), 0);

Promise.resolve().then(() => console.log("Asynchronous Task: 2"));

console.log("Synchronous Task: 2");