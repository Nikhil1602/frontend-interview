// Modules in Node.js are reusable pieces of code
// organized in separate files that can be exported
// and imported to build scalable and maintainable
// applications.

// Node.js has different types of modules:

// 1. Core Modules: Built-in modules provided by Node.js
//    (e.g., 'fs', 'http', 'path') that provide essential
//    functionality without needing to install anything.
// 2. File Modules: Custom modules created by developers
//    in separate files (e.g., './math.js') that can be
//    imported using relative paths.
// 3. Node Modules: Third-party packages installed via npm
//    (e.g., 'lodash', 'express') that can be imported by
//    their package name after installation.

// Key features of Node.js modules:

// 1. Encapsulation: Modules allow developers to encapsulate
//    functionality, keeping code organized and preventing
//    global namespace pollution.
// 2. Reusability: Modules can be reused across different parts
//    of an application or even across different projects.
// 3. Exporting and Importing: Modules can export functions,
//    objects, or values that can be imported and used in other
//    files using the `require` function.

// Example of a simple module (math.js):
// function add(a, b) {
//     return a + b;
// }

// module.exports = {
//     add
// };

// Example of importing and using the module (app.js):
// const math = require('./math');
// const result = math.add(5, 3);
// console.log(result); // Output: 8