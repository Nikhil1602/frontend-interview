// "worker_threads" in Node.js allow running JavaScript in 
// parallel threads to handle CPU-intensive tasks without 
// blocking the main event loop.

// Key features of worker_threads include:

// 1. Parallel Execution: Worker threads can run tasks in 
// parallel, improving performance for CPU-bound operations.
// 2. Communication: Workers can communicate with the main
// thread using message passing, allowing data to be shared
// between threads.
// 3. Isolation: Each worker thread has its own event loop and
// memory, providing isolation from the main thread and other
// workers.
// Example of using worker_threads:

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {

    // Main thread: Create a worker
    const worker = new Worker(__filename);

    worker.on('message', (message) => {
        console.log(`Message from worker: ${message}`);
    });

    worker.postMessage('Hello, Worker!');

} else {

    // Worker thread: Listen for messages from the main thread

    parentPort.on('message', (message) => {
        console.log(`Message from main thread: ${message}`);
        parentPort.postMessage('Hello, Main Thread!');
    });

}