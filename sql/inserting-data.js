// ------------------------------------------------------->
// Basic Syntax
// ------------------------------------------------------->
// INSERT INTO table_name (column1, column2, column3)
// VALUES (value1, value2, value3);


// ------------------------------------------------------->
// Example 1: Insert Single Row
// ------------------------------------------------------->
// INSERT INTO employees (id, name, salary)
// VALUES (1, 'Nikhil', 50000);

// 👉 Inserts one record into the employees table


// ------------------------------------------------------->
// Example 2: Insert Multiple Rows
// ------------------------------------------------------->
// INSERT INTO employees (id, name, salary)
// VALUES
// (2, 'Raj', 60000),
// (3, 'Amit', 55000);

// 👉 Inserts multiple rows in one query


// ------------------------------------------------------->
// Example 3: Insert Without Column Names
// ------------------------------------------------------->
// INSERT INTO employees
// VALUES (4, 'Priya', 52000);

// 👉 Works only if you provide values in the exact column order


// ⚠️ Important Points
// Always match column order with values
// Use quotes ' ' for strings
// Numbers don’t need quotes