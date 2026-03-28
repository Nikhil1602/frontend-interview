// A FULL JOIN (or FULL OUTER JOIN) in SQL returns all
// records from both tables.

// If there is a match → data is combined
// If there is no match → missing side shows NULL

// ---------------------------------------------------------->
// 🧠 Simple Understanding
// ---------------------------------------------------------->

// 👉 “Give me everything from both tables, matched
// where possible.”


// ---------------------------------------------------------->
// Syntax
// ---------------------------------------------------------->
// SELECT columns
// FROM table1
// FULL JOIN table2
// ON table1.column = table2.column;


// ---------------------------------------------------------->
// Example
// ---------------------------------------------------------->
// SELECT c.name, o.item
// FROM Customers c
// FULL JOIN Orders o
// ON c.id = o.customer_id;


// Customers Table:
// +---------------------+
// |    id    |   name   |
// +---------------------+
// |    1     |   John   |
// |    2     |   Mary   |
// +---------------------+

// Orders Table:
// +-------------------------------------------+
// |    id    |   customer_id   |     item     |
// +-------------------------------------------+
// |    1     |        1        |    Laptop    |
// |    2     |        3        |    Tablet    |
// +-------------------------------------------+


// Result:
// +--------------------------+
// |    name     |    item    |
// +--------------------------+
// |    John     |   Laptop   |
// |    Mary     |    NULL    |
// |    NULL     |   Tablet   |
// +--------------------------+


// ---------------------------------------------------------->
// 🧠 Key Points
// ---------------------------------------------------------->
// Returns all rows from both tables
// Matches where possible
// Non-matching → NULL on missing side


// ---------------------------------------------------------->
// ⚠️ Important Note
// ---------------------------------------------------------->
// MySQL does NOT support FULL JOIN directly ❌
// You can achieve it using:

// SELECT * FROM table1
// LEFT JOIN table2 ON table1.id = table2.id
// UNION
// SELECT * FROM table1
// RIGHT JOIN table2 ON table1.id = table2.id;


// ---------------------------------------------------------->
// 🚀 Real-World Use
// ---------------------------------------------------------->
// Combine all records from two systems
// Find unmatched data from both sides
// Data comparison and auditing