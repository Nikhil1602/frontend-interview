// CORS is a browser security feature that restricts 
// cross-origin requests, and it is implemented in Express 
// by enabling specific headers using the cors middleware 
// to allow or restrict access.

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! CORS is enabled for this route.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 