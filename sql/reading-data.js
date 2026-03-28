// ------------------------------------------------------->
// Basic Syntax for reading data in table
// ------------------------------------------------------->
// SELECT column_name(s)
// FROM table_name;


// ------------------------------------------------------->
// Example 1: Read all data
// ------------------------------------------------------->
// SELECT * FROM employees;

// 👆 Fetches all columns and all rows from the
// employees table


// ------------------------------------------------------->
// Example 2: Read Specific Columns
// ------------------------------------------------------->
// SELECT name, salary
// FROM employees;

// 👆 Fetches only name and salary columns


// ------------------------------------------------------->
// Example 3: With Condition (Filtering)
// ------------------------------------------------------->
// SELECT name, salary
// FROM employees
// WHERE salary > 50000;

// 👆 Returns employees with salary greater than 50,000


// ------------------------------------------------------->
// Example 4: Sorting Data
// ------------------------------------------------------->
// SELECT name, salary
// FROM employees
// ORDER BY salary DESC;


// 👆 Sorts employees by highest salary


// ------------------------------------------------------->
// Example 5: Limit Results
// ------------------------------------------------------->
// SELECT * FROM employees
// LIMIT 3;

// 👆 Returns only first 3 rows

// ------------------------------------------------------->
// Example 5: Find Unique data
// ------------------------------------------------------->
// SELECT DISTINCT country FROM customers

// 👆 Returns distinct countries from customers table


// 🧠 Key Points

// SELECT = used for reading data
// * = all columns
// WHERE = filter data
// ORDER BY = sort data
// LIMIT = restrict number of rows