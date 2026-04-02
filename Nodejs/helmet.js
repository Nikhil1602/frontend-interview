// helmet is an Express middleware that helps secure 
// applications by setting various HTTP headers to protect 
// against common web vulnerabilities.

// Example of using helmet:
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet middleware to set security-related HTTP headers
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello, your app is secured with Helmet!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// In this example, we import the helmet middleware and use it
// in our Express app. Helmet will automatically set various
// security-related HTTP headers to help protect the app from
// common vulnerabilities. When a GET request is made to the
// root path "/", the server responds with a message confirming
// that the app is secured with Helmet.