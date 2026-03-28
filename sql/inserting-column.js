// ------------------------------------------------------->
// Basic Syntax
// ------------------------------------------------------->
// ALTER TABLE table_name
// ADD column_name datatype;


// ------------------------------------------------------->
// Example 1: Add a Single Column
// ------------------------------------------------------->
// ALTER TABLE employees
// ADD age INT;

// 👆 Adds a new column age to the employees table


// ------------------------------------------------------->
// Example 2: Add Column with Constraints
// ------------------------------------------------------->
// ALTER TABLE employees
// ADD email VARCHAR(100) NOT NULL;

// 👆 Adds email column with NOT NULL constraint


// ------------------------------------------------------->
// Example 3: Add Multiple Columns
// ------------------------------------------------------->
// ALTER TABLE employees
// ADD (
//     address VARCHAR(255),
//     joining_date DATE
// );

// 👆 Adds multiple columns at once (syntax may vary by DB)



// ------------------------------------------------------->
// ⚠️ Important Points
// ------------------------------------------------------->
// Existing rows will get NULL values by default
// If using NOT NULL, you may need a DEFAULT value
// Works on existing tables without deleting data


// ------------------------------------------------------->
// 💡 Pro Tip
// ------------------------------------------------------->
// ALTER TABLE employees
// ADD status VARCHAR(20) DEFAULT 'active';


// 👆 Ensures old rows don’t break due to missing values