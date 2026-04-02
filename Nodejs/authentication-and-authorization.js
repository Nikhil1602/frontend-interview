// Authentication verifies a user’s identity, while 
// authorization determines what actions or resources that 
// authenticated user is allowed to access.

// In Node.js, you can implement authentication and 
// authorization using various strategies, such as 
// JWT (JSON Web Tokens), OAuth, or session-based authentication.

// Example of JWT authentication and authorization:

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secretKey = 'your_secret_key';

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Route to login and generate JWT
app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };
    const accessToken = jwt.sign(user, secretKey);
    res.json({ accessToken });
});

// Protected route that requires authentication
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// In this example, the /login route generates a JWT for the user,
// and the /protected route is protected by the authenticateToken
// middleware, which verifies the JWT before allowing access.