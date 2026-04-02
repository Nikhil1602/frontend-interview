// body-parser is a middleware used to parse incoming request 
// bodies and make the data available in req.body, though 
// its functionality is now built into Express using 
// express.json() and express.urlencoded().

// Example of using body-parser (or express.json()):
const express = require('express');
const app = express();

// Use express.json() to parse JSON request bodies
app.use(express.json());

app.post('/data', (req, res) => {
    // Access the parsed data in req.body
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// In this example, we use express.json() to parse incoming JSON
// request bodies. When a POST request is made to "/data" with a
// JSON body, the data is available in req.body, and we send a
// response confirming the received data.