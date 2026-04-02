// Routing is the mechanism in Express that determines 
// how an application responds to different HTTP requests 
// based on the request URL and method.

const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route for POST requests to /submit
app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

// Define a route for GET requests to /users/:id
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});