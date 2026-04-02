// "spawn" is used for streaming large data, "exec" is used
// for "executing" commands with buffered output, and "fork"
// is a special method to create Node.js child processes
// with built-in communication.

// Example of using "spawn":
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

// Example of using "exec":
const { exec } = require('child_process');
exec('ls -lh /usr', (error, stdout, stderr) => {

    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

});

// Example of using "fork":
const { fork } = require('child_process');
const child = fork('child.js');
child.on('message', (message) => {
    console.log(`Message from child: ${message}`);
});
child.send('Hello from parent!');