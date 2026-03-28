// An INNER JOIN in SQL is used to combine rows from two or
// more tables based on a matching condition.

// It returns only the records that have matching values
// in both tables.

// ---------------------------------------------------------->
// 🧠 Simple Understanding
// ---------------------------------------------------------->

// Think of two tables:

// Table A (Customers)
// Table B (Orders)

// 👉 INNER JOIN gives only common data (where both tables match)

// ---------------------------------------------------------->
// Syntax
// ---------------------------------------------------------->
// SELECT columns
// FROM table1
// INNER JOIN table2
// ON table1.column = table2.column;



// ---------------------------------------------------------->
// Example
// ---------------------------------------------------------->
// SELECT c.name, o.item
// FROM Customers c
// INNER JOIN Orders o
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
// +--------------------------+

// 👉 Note:

// Record with customer_id = 3 is not included
// Because there is no matching customer

// ---------------------------------------------------------->
// 🚀 Real-World Use
// ---------------------------------------------------------->
// Fetch user + orders
// Fetch students + courses
// Combine data from multiple tables