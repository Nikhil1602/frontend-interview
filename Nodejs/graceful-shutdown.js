// Graceful shutdown is the process of safely terminating 
// an application by completing ongoing tasks, closing 
// resources, and stopping new requests to prevent data loss 
// and ensure stability.

// In Node.js, you can implement graceful shutdown by listening
// for termination signals (like SIGINT or SIGTERM) and 
// performing cleanup tasks before exiting the process.

const express = require('express');
const app = express();
const PORT = 3000;

// Simulate a long-running task
app.get('/long-task', (req, res) => {
    setTimeout(() => {
        res.send('Long task completed');
    }, 5000); // Simulate a task that takes 5 seconds
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle graceful shutdown
const gracefulShutdown = () => {

    console.log('Received shutdown signal, shutting down gracefully...');
    server.close(() => {
        console.log('Closed out remaining connections.');
        process.exit(0);
    });

    // Force shutdown after 10 seconds if not closed
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);

};

// Listen for termination signals
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// In this example, when the server receives a SIGINT or SIGTERM
// signal, it will call the gracefulShutdown function,
// which attempts to close the server and any ongoing
// connections. If the server cannot close within 10 seconds,
// it will forcefully exit the process.
