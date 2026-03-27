// A shallow copy copies only the top-level properties, 
// and nested objects are still referenced.

// A deep copy creates a completely independent copy, 
// including all nested levels. So changes in a deep copy 
// don’t affect the original object, unlike shallow copy.

// ==============================================================>
//  👇 E.g. for Shallow Copy
// ==============================================================>

let obj1 = {
    name: "Nikhil",
    address: {
        city: "Ahmedabad"
    }
};

let obj2 = { ...obj1 }; // shallow copy

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Mumbai

// ==============================================================>
//  👇 E.g. for Deep Copy using JSON
// ==============================================================>

let obj3 = {
    name: "Nikhil",
    address: {
        city: "Ahmedabad"
    }
};

let obj4 = JSON.parse(JSON.stringify(obj3)); // deep copy using JSON

// ❌ Limitations with JSON Deep copy:

// Removes functions
// Loses undefined
// Breaks Date, Map, Set

obj4.address.city = "Mumbai";

console.log(obj3.address.city); // Ahmedabad

// ==============================================================>
//  👇 E.g. for Deep Copy using built-in method
// ==============================================================>

let obj5 = {
    name: "Nikhil",
    address: {
        city: "Ahmedabad"
    }
};

let obj6 = structuredClone(obj5); // deep copy using in-built method

obj6.address.city = "Mumbai";

console.log(obj5.address.city);