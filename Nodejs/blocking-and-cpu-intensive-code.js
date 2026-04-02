// Blocking code is code that stops the execution of other 
// operations until it finishes.

// It blocks the event loop, preventing Node.js from handling 
// other requests.

// CPU-intensive code is code that requires a lot of processing 
// power, such as complex calculations or data processing, 
// which can also block the event loop.

// Example of blocking code:

const fs = require('fs');
// This is a blocking operation that reads a file synchronously.

const data = fs.readFileSync('largefile.txt');
console.log(data.toString());

// In this example, the readFileSync function blocks the 
// event loop until the file is fully read,
// preventing Node.js from handling other requests during 
// that time.
// Example of CPU-intensive code:

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(40));
// In this example, the fibonacci function is CPU-intensive
// because it performs a large number of recursive calls,
// which can block the event loop and prevent Node.js from
// handling other requests until the calculation is complete.

