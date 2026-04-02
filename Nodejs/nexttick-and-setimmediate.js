// "process.nextTick()"" executes immediately after the 
// current operation with higher priority, while "setImmediate()" 
// runs in the next event loop cycle after I/O callbacks.

console.log('Start');

process.nextTick(() => {
    console.log('Next Tick');
});

setImmediate(() => {
    console.log('Set Immediate');
});

console.log('End');

// Output:
// Start
// End
// Next Tick
// Set Immediate

