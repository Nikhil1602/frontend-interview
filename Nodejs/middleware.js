// Middleware in Express is a function that executes during 
// the request-response cycle and can modify the request, 
// response, or pass control to the next function using next().

// Middleware can be used for various purposes, such as
// logging, authentication, error handling, and more.

const express = require('express');
const app = express();
const PORT = 3000;

// Example of a simple middleware that logs the request 
// method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});