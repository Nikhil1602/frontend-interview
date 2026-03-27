// Debouncing is a technique that helps to improve the
// performance of web applications by limiting the
// frequency of function calls by delaying its execution.

// It is commonly used in scenarios
// where events are triggered rapidly, such as
// typing in an input field or resizing a window.

// =======================================================>
// E.g. 👇 Debouncing Example
// =======================================================>

// function handleSearch(event) {

//     const value = event.target.value;
//     console.log("Searching for: " + value);

// }

// function debounce(fn, delay) {

//     let timer;
//     return function (...args) {

//         clearInterval(timer);
//         timer = setTimeout(() => { fn.apply(this, args); }, delay);

//     }
// }

// const input = document.getElementById("search");
// input.addEventListener("keyup", debounce(handleSearch, 500));

// Throttling is a technique used to limit the number of times a
// function can be executed in a given time frame.

// It’s extremely useful when dealing with performance-heavy
// operations, such as resizing the window or scrolling events,
// where repeated triggers can lead to performance issues.

// =======================================================>
// E.g. 👇 Throttling Example
// =======================================================>

// function handleScroll() {

//     console.log("Scroll event handled");

// }

// function throttle(fn, delay) {

//     let lastCall = 0;

//     return function (...args) {

//         const now = Date.now();

//         if (now - lastCall >= delay) { lastCall = now; fn.apply(this, args); }

//     }
// }

// document.addEventListener("scroll", throttle(handleScroll, 500));