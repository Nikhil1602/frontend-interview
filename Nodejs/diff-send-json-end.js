// "res.send()" sends any type of response, 
// "res.json()" specifically sends JSON data with proper headers, 
// and "res.end()" simply ends the response without formatting 
// or additional processing.

const express = require('express');
const app = express();
const PORT = 3000;

// Using res.send() to send a string response
app.get('/send', (req, res) => {
    res.send('This is a response from res.send()');
});

// Using res.json() to send a JSON response
app.get('/json', (req, res) => {
    res.json({ message: 'This is a response from res.json()', status: 'success' });
});

// Using res.end() to end the response without sending any data
app.get('/end', (req, res) => {
    res.end(); // Ends the response without sending any data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});