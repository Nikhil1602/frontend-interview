// Middleware chaining in Express is the process of 
// executing multiple middleware functions sequentially, 
// where each function passes control to the next using next().

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
    res.setHeader('X-Custom-Header', 'Middleware Chaining Example');
    console.log('Middleware 2: Custom header added');
    next(); // Pass control to the next middleware
});

// Middleware 3: Simulates authentication check
app.use((req, res, next) => {
    const authenticated = true; // Simulate authentication
    if (authenticated) {
        console.log('Middleware 3: User authenticated');
        next(); // Pass control to the next middleware
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Final route handler
app.get('/', (req, res) => {
    res.send('Hello, World! This response is from the final route handler.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});