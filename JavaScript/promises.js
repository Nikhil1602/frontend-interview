// A promise in javascript is an object that represents the
// eventual result of an asynchronous operation. It can be
// into three stages: pending, fulfilled, or rejected.

// Promises help to manage asynchronous code more cleanly and
// avoid callback hell by using methods like: .then(), .catch()
// and async/await.

// Async-await is a modern javascript feature used to handle
// asynchronous operations. The async keyword makes a function
// return a promise, and await pauses the execution of that
// function until the promise resolves. It makes asynchronous
// code easier to read and maintain compared to promise chaining.

// Promise chaining is a way to run asynchronous tasks one after 
// another, where each step uses the result of the previous one
// using .then() method.

const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {

        resolve("Data fetched successfully");

    } else {

        reject("Error fetching data");

    }

});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// Promise.all()
// It waits until all promises are successfully resolved.
// If any one fails, the entire result is rejected
// immediately.

const p1 = Promise.resolve("User Data");
const p2 = Promise.resolve("Order Data");
const p3 = Promise.resolve("Payment Data");

Promise.all([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Promise.race()
// It returns the result of the first promise that settles
// (either resolve or reject).
// It does not wait for others.

const p4 = new Promise((res) => setTimeout(() => res("Fast API"), 1000));
const p5 = new Promise((res) => setTimeout(() => res("Slow API"), 3000));

Promise.race([p4, p5])
    .then((result) => console.log(result));

// Promise.allSettled()
// It waits until all promises finish, regardless of success or
// failure.
// It returns status for each promise.

const p6 = Promise.resolve("User Data");
const p7 = Promise.reject("API Error");

Promise.allSettled([p6, p7])
    .then((result) => console.log(result));

// Promise.any()
// It resolves as soon as the first promise succeeds.
// It ignores rejected promises unless all promises fail.

const p8 = Promise.reject("Server 1 failed");
const p9 = Promise.resolve("Server 2 success");
const p10 = Promise.reject("Server 3 failed");

Promise.any([p8, p9, p10])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// ======================================================>
// 👇 Promise Chaining
// ======================================================>

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Nikhil" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders fetched");
            resolve(["order1", "order2"]);
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order details fetched");
            resolve({ order, status: "delivered" });
        }, 1000);
    });
}

// ======================================================>
// 🔗 Promise Chaining
// ======================================================>

getUser()
    .then((user) => {
        return getOrders(user.id);
    })
    .then((orders) => {
        return getOrderDetails(orders[0]);
    })
    .then((details) => {
        console.log("Final Result:", details);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

// ======================================================>
// 👇 Aync-Await
// ======================================================>

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Nikhil" });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve([{ id: 101, title: "Post 1" }]);
        }, 1000);
    });
}

function fetchPostDetails(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Post details fetched");
            resolve({ id: postId, content: "This is post content" });
        }, 1000);
    });
}

async function getData() {

    try {

        const user = await fetchUser();

        const posts = await fetchPosts(user.id);

        const details = await fetchPostDetails(posts[0].id);

        console.log("Final Result:", details);

    } catch (error) {

        console.log("Error:", error);

    }

}

getData();

// Promises are the core way to handle asynchronous operations
// in  JavaScript using .then() and .catch().

// Async/await is syntactic sugar built on top of promises that
// allows writing asynchronous code in a more readable,
// synchronous-like manner using await and try/catch.

// Async/await doesn’t replace promises, it just makes them
// easier to work with.