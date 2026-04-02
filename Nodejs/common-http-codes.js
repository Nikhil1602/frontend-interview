// Common HTTP status codes include 

// - 200 (success),
// - 201 (created), 
// - 400 (bad request),
// - 401 (unauthorized), 
// - 403 (forbidden),
// - 404 (not found), and 
// - 500 (server error),

//  each indicating the result of a client’s request.

// In Node.js, you can use these status codes in your responses to
// indicate the outcome of a request. For example:

const express = require('express');
const app = express();

app.get('/success', (req, res) => {
    res.status(200).json({ message: 'Request was successful' });
});

app.post('/create', (req, res) => {
    // Assume we create a resource here
    res.status(201).json({ message: 'Resource created successfully' });
});

app.get('/bad-request', (req, res) => {
    res.status(400).json({ message: 'Bad request' });
});

app.get('/unauthorized', (req, res) => {
    res.status(401).json({ message: 'Unauthorized' });
});

app.get('/forbidden', (req, res) => {
    res.status(403).json({ message: 'Forbidden' });
});

app.get('/not-found', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.get('/server-error', (req, res) => {
    res.status(500).json({ message: 'Server error' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// In this example, we have defined routes that return
// different HTTP status codes based on the outcome of
// the request. This helps clients understand the result
// of their requests and handle them accordingly.