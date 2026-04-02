// Node.js is single-threaded to stay lightweight and efficient,
// and it handles concurrency using the event loop, non-blocking
// I/O, and background threads via libuv thread pool.

// 1. Event Loop: The event loop allows Node.js to perform
//    non-blocking operations by offloading tasks to the system
//    kernel whenever possible. It continuously checks for
//    events and executes callbacks when events are triggered.
// 2. Non-blocking I/O: Node.js uses non-blocking I/O operations,
//    allowing it to handle multiple requests simultaneously
//    without waiting for any single operation to complete.
// 3. Libuv Thread Pool: For tasks that cannot be performed
//    asynchronously (like file system operations), Node.js
//    uses a thread pool provided by the libuv library.
//    This allows it to perform these tasks in the background
//    while still handling other requests in the main event loop.

// This architecture allows Node.js to efficiently manage
// concurrent operations without blocking the main thread,
// making it suitable for building scalable network applications.