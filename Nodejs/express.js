// Express.js is a minimal and flexible web framework built 
// on top of Node.js. It simplifies building web applications 
// and APIs by providing routing, middleware support, and 
// HTTP utilities.

// To create a simple Express.js application, you can follow
// these steps:

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
