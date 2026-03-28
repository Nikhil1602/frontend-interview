// A LEFT JOIN (or LEFT OUTER JOIN) in SQL is used to
// retrieve all records from the left table and the matching
// records from the right table.

// If there is no match, the result will still include
// the left table’s data, but the right table’s columns
// will show NULL.

// ---------------------------------------------------------->
// 🧠 Simple Understanding
// ---------------------------------------------------------->

// 👉 “Give me everything from the left table, and match
// data from the right table if available.”


// ---------------------------------------------------------->
// Syntax
// ---------------------------------------------------------->
// SELECT columns
// FROM table1
// LEFT JOIN table2
// ON table1.column = table2.column;


// ---------------------------------------------------------->
// Example
// ---------------------------------------------------------->
// SELECT c.name, o.item
// FROM Customers c
// LEFT JOIN Orders o
// ON c.id = o.customer_id;


// Customers Table:
// +---------------------+
// |    id    |   name   |
// +---------------------+
// |    1     |   John   |
// |    2     |   Mary   |
// |    3     |   Alex   |
// +---------------------+

// Orders Table:
// +-------------------------------------------+
// |    id    |   customer_id   |     item     |
// +-------------------------------------------+
// |    1     |        1        |    Laptop    |
// |    2     |        2        |    Phone     |
// +-------------------------------------------+


// Result:
// +--------------------------+
// |    name     |    item    |
// +--------------------------+
// |    John     |   Laptop   |
// |    Mary     |   Phone    |
// |    Alex     |    NULL    |
// +--------------------------+


// ---------------------------------------------------------->
// 🧠 Key Points
// ---------------------------------------------------------->
// Returns all rows from left table
// Matching rows from right table
// Non-matching → NULL values


// ---------------------------------------------------------->
// 🚀 Real-World Use
// ---------------------------------------------------------->
// Find users with or without orders
// Show all employees even if no department assigned
// Detect missing relationships (NULL cases)