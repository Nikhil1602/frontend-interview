// Synchronous functions execute sequentially and block 
// execution, while asynchronous functions run without 
// waiting and allow other operations to continue, 
// improving performance and responsiveness.

// Synchronous Example:
function syncFunction() {
    console.log("Start");
    console.log("End");
}

syncFunction();
// Output:
// Start
// End

// Asynchronous Example:
function asyncFunction() {
    console.log("Start");
    setTimeout(() => {
        console.log("End");
    }, 1000);
}

asyncFunction();
// Output:
// Start
// (after 1 second)
// End