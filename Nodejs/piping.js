// Piping connects the output of one stream directly to another 
// stream.

// Think of it like:
// - Readable Stream → Writable Stream

// This is useful for:
// - Efficient data transfer
// - Avoiding memory overhead
// - Simplifying code
// Example of piping a readable stream to a writable stream:

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);

// In this example, we create a readable stream to read data from
// "input.txt" and a writable stream to write data to "output.txt".
// The "pipe()" method connects the two streams, allowing data to
// flow from the readable stream to the writable stream
// efficiently, without needing to load the entire file into
// memory at once.