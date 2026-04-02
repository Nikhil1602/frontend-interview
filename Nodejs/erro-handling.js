// Error handling in Express is the mechanism of catching 
// and processing errors using middleware and next(err) to 
// ensure the application responds properly without crashing.

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route that intentionally throws an error
app.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong!');
    next(error); // Pass the error to the error-handling middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ message: err.message }); // Send a JSON response with the error message
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});