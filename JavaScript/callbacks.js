// A callback function is a function that is passed as an argument
// to another function and is executed later by that function.
// Callbacks are commonly used for asynchronous operations, event
// handling and array methods in javascript.

function processUser(callback) {

    console.log("Processing User...");
    callback();

}

processUser(function () {
    console.log("User processed successfully!");
});

// Callback Hell happens when multiple asynchronous operations are
// written using nested callbacks, which makes the code difficult
// to read and maintain. Because the structure looks like a pyramid
// due to deep nesting, it's also called the Pyramid of Doom.

// E.g.

// getUser(function(user){

//     getOrder(user.id, function(orders){

//         getOrderDetails(orders[0], function(details){

//             processPayment(details, function(paymentStatus){

//                 console.log("Payment complete!");

//             });

//         });
//     });

// });