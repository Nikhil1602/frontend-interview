// A RIGHT JOIN (or RIGHT OUTER JOIN) in SQL is the opposite
// of a LEFT JOIN.

// It returns all records from the right table and the
// matching records from the left table.
// If there is no match, the left side will show NULL.

// ---------------------------------------------------------->
// 🧠 Simple Understanding
// ---------------------------------------------------------->

// 👉 “Give me everything from the right table, and match
// data from the left table if available.”


// ---------------------------------------------------------->
// Syntax
// ---------------------------------------------------------->
// SELECT columns
// FROM table1
// RIGHT JOIN table2
// ON table1.column = table2.column;


// ---------------------------------------------------------->
// Example
// ---------------------------------------------------------->
// SELECT c.name, o.item
// FROM Customers c
// RIGHT JOIN Orders o
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
// |    2     |        2        |    Phone     |
// |    3     |        3        |    Tablet    |
// +-------------------------------------------+


// Result:
// +--------------------------+
// |    name     |    item    |
// +--------------------------+
// |    John     |   Laptop   |
// |    Mary     |   Phone    |
// |    NULL     |   Tablet   |
// +--------------------------+



// ---------------------------------------------------------->
// 🧠 Key Points
// ---------------------------------------------------------->
// Returns all rows from right table
// Matching rows from left table
// Non-matching → left side shows NULL


// ---------------------------------------------------------->
// 🚀 Real-World Use
// ---------------------------------------------------------->
// Find all orders even if customer info is missing
// Show all transactions, including orphan records
// Data auditing and validation