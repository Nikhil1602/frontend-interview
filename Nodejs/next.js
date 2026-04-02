// next() is a function in Express used to pass control 
// from the current middleware to the next middleware in 
// the request-response cycle.

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware 1: Logs the request method and URL
app.use((req, res, next) => {
    console.log(`Middleware 1: ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});

// Middleware 2: Adds a custom header to the response
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'Next Function Example');
    console.log('Middleware 2: Custom header added');
    next(); // Pass control to the next middleware
});

// Final route handler
app.get('/', (req, res) => {
    res.send('Hello, World! This response is from the final route handler.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
