// Local storage stores data in the browser with no expiration time.
// The data stays even if the browser is closed and reopened.

// Session storage stores data only for the current browser tab or
// session.

// Cookies store small pieces of data that are automatically sent
// with every HTTP request to the server.

// Local Storage limit --> 5-10 MB
// Session Storage limit --> 5 MB
// Cookies storage limit --> 4 KB

// =================================================>
// E.g. localStorage
// =================================================>
// localStorage.setItem("id", "emp2");
// localStorage.setItem("user", JSON.stringify({ name: "Nikhil" }));

// let id = localStorage.getItem("id");
// let user = JSON.parse(localStorage.getItem("user"));

// localStorage.removeItem("id");
// localStorage.removeItem("user");

// =================================================>
// E.g. sessionStorage
// =================================================>

// sessionStorage.setItem("id", "emp2");
// sessionStorage.setItem("user", JSON.stringify({ name: "Nikhil" }));

// let id = sessionStorage.getItem("id");
// let user = JSON.parse(sessionStorage.getItem("user"));

// sessionStorage.removeItem("id");
// sessionStorage.removeItem("user");

// =================================================>
// E.g. Cookie
// =================================================>

// document.cookie = "username=Nikhil; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";