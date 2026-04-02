// The process object in Node.js is a global object that
// provides information and control over the current running
// application, including environment variables, execution
// details, and system interactions.

// Key features of the process object include:

// 1. Environment Variables: Access and manipulate environment 
// variables using process.env.

// 2. Process Information: Retrieve details about the current 
// process, such as process.pid (process ID) and 
// process.version (Node.js version).

// 3. Standard Input/Output: Interact with standard input, 
// output, and error streams using process.stdin, 
// process.stdout, and process.stderr.

// 4. Event Handling: Listen for events like 'exit', 
// 'uncaughtException', and 'warning' to manage application 
// behavior.

// 5. Process Control: Use methods like process.exit() to 
// terminate the application or process.kill() to send 
// signals to other processes.

// Example usage of the process object:
console.log('Process ID:', process.pid);
console.log('Node.js Version:', process.version);
console.log('Environment Variables:', process.env);

// Listen for the 'exit' event
process.on('exit', (code) => {
    console.log(`Process exiting with code: ${code}`);
});
