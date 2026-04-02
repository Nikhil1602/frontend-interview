// Non-blocking I/O means Node.js executes operations
// asynchronously without waiting for them to complete,
// allowing it to handle multiple requests efficiently and
// making it highly performant for I/O-heavy applications.

// In Node.js, non-blocking I/O is achieved through the use of
// asynchronous APIs and the event loop. When a non-blocking
// I/O operation is initiated (like reading a file or making a
// network request), Node.js offloads the operation to the
// system kernel or a background thread, allowing the main
// thread to continue processing other tasks. Once the I/O
// operation is complete, a callback function is triggered,
// and the result is processed without blocking the main
// thread. This allows Node.js to handle many concurrent
// requests efficiently, making it ideal for real-time
// applications and services that require high performance.