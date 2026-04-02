// Rate limiting is a technique used to restrict the number 
// of requests a client can make to a server within a specific 
// time to prevent abuse and ensure system stability.

const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Define a rate limiter with a maximum of 100 requests 
// per 15 minutes.

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply the rate limiter to all requests
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// In this example, we use the "express-rate-limit" middleware
// to limit each IP address to 100 requests every 15 minutes.
// If a client exceeds this limit, they will receive a message
// indicating that they have made too many requests and
// should try again later.

