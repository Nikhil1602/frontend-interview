// "app.use()" is used to register middleware that runs for 
// all HTTP methods and routes, while "app.get()" is used 
// to define a route handler for GET requests on a 
// specific path.

// Example of using "app.use()":
const express = require('express');
const app = express();

// Middleware that runs for all routes
app.use((req, res, next) => {
    console.log('Middleware executed for all routes');
    next();
});

// Example of using "app.get()":
// Route handler for GET requests to "/hello"
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// In this example, the middleware registered with "app.use()"
// will execute for every incoming request, 
// while the route handler defined with "app.get()" 
// will only execute for GET requests to the "/hello" path.

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});