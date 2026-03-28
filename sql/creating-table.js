// ------------------------------------------------------->
// Basic Syntax for creating table
// ------------------------------------------------------->
// CREATE TABLE table_name (
//     column1 datatype constraints,
//     column2 datatype constraints,
//     column3 datatype constraints
// );


// ------------------------------------------------------->
// Example 1: Simple example
// ------------------------------------------------------->
// CREATE TABLE students (
//     id INT,
//     name VARCHAR(50),
//     age INT
// );

// 👉 This creates a students table with
// three columns: id, name, and age.


// ------------------------------------------------------->
// Example 2: Example with constraints
// ------------------------------------------------------->
// CREATE TABLE employees (
//     emp_id INT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     salary DECIMAL(10,2),
//     joining_date DATE,
//     is_active BOOLEAN DEFAULT TRUE
// );

// Here:

// PRIMARY KEY ensures unique values
// NOT NULL prevents empty values
// DEFAULT assigns a default value

// ------------------------------------------------------->
// Example 3: Example with Foreign Key
// ------------------------------------------------------->
// CREATE TABLE orders (
//     order_id INT PRIMARY KEY,
//     user_id INT,
//     amount DECIMAL(10,2),
//     FOREIGN KEY (user_id) REFERENCES users(id)
// );

// This links orders.user_id to users.id.