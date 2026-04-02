// morgan is an Express middleware used to log 
// HTTP requests, providing useful information like 
// request method, URL, status code, and response time 
// for debugging and monitoring.

// Example of using morgan:
const express = require('express');
const morgan = require('morgan');
const app = express();

// Use morgan middleware to log HTTP requests in 'combined' format
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello, this is a morgan logging example!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});