// Event Propogation is the process by which an event travels
// through the DOM in capturing, target, and bubbling phases.

// Three phases of Event Propogation:

// 1. Capturing Phase (Top -> Down)
// - Event starts from document.
// - Travels down to the target elements.

// 2. Target Phase
// - Event reaches the actual clicked elements.

// 3. Bubbling Phase (Bottom -> Up)
// - Event bubbles back up to parent elements.

// E.g.,
//
// <div id="parent">
//     <button id="child">Click Me!</button>
// </div>
//
// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// });

// Output when button is clicked:
// Child clicked
// Parent clicked

// To stop this weird behavior we can use event.stopPropogation();
// It prevents event from moving further.

// ==============================================================>

// Event Delegation is a technique where a single event listener
// is attached to a parent element to handle events for its
// child elements using event bubbling. It improves performance
// and works well with dynamically added elements.

// E.g.
//
// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
//
// document.getElementById("list").addEventListener("click", (event) => {
//   console.log("Clicked:", event.target.textContent);
// });