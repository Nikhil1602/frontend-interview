// Clustering in Node.js is a technique to create multiple 
// worker processes using the cluster module to utilize all 
// CPU cores and improve application performance and 
// scalability.

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {

    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);

}

// In this example, the master process forks a worker for each CPU core.
// Each worker runs an HTTP server that listens on port 8000.
// If a worker dies, the master process logs the event.