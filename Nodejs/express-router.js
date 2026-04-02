// Express Router is a modular way to handle routes in 
// separate files using express.Router(), making applications 
// more organized and scalable.

// Example of using Express Router:
const express = require('express');
const app = express();
const router = express.Router();

// Define routes in the router
router.get('/hello', (req, res) => {
    res.send('Hello from the router!');
});

// Use the router in the main app
app.use('/api', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// In this example, we create a router using express.Router(),
// define a GET route for "/hello", and then use the router
// in the main app with a base path of "/api".
// This means that the route will be accessible at "/api/hello".