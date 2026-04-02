// The require keyword in Node.js is used to import modules
// into a file, enabling code reuse and modular application
// structure.

// When you use require, Node.js looks for the specified module
// in the following order:

// 1. Core Modules: Built-in modules like 'fs', 'http', etc.
// 2. File Modules: Local files in the project (e.g., './math.js').
// 3. Node Modules: Third-party packages installed via npm.

// Example of using require to import a local module (math.js):
// const math = require('./math');
// const result = math.add(5, 3);
// console.log(result); // Output: 8

// Example of using require to import a core module (fs):
// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Example of using require to import a third-party module
// (lodash):
// const _ = require('lodash');
// const array = [1, 2, 3, 4];
// const shuffledArray = _.shuffle(array);
// console.log(shuffledArray); // Output: A shuffled version of
// the array