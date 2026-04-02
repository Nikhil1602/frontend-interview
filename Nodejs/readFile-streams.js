// "readFile()"" reads the entire file into memory at once,
// while "streams" read data in chunks, making them more
// efficient and suitable for handling large files.

// Example of using "readFile()":

const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log(data);

});

// Example of using streams:

const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk}`);
});

readableStream.on('error', (err) => {
    console.error(err);
});