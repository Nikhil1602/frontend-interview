// Streams are objects that allow you to read or write data in 
// chunks, instead of loading everything into memory at once.

// They are useful for:
// - Large files
// - Real - time data
// - Video streaming
// - File uploads / downloads

// Types of Streams in Node.js
// - Readable → Read data
// - Writable → Write data
// - Duplex → Read & Write
// - Transform → Modify data while reading/writing

// Example of a readable stream:

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');

readableStream.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk}`);
});

// Example of a writable stream:

const writableStream = fs.createWriteStream('output.txt');
writableStream.write('Hello, World!\n');
writableStream.end();

// In this example, we create a readable stream to read data
// from "input.txt" and log each chunk of data received.
// We also create a writable stream to write "Hello, World!"
// to "output.txt". The "end()" method signals that we are
// done writing to the stream.

