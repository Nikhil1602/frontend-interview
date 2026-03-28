// ------------------------------------------------------->
// Basic Syntax
// ------------------------------------------------------->
// ALTER TABLE table_name
// DROP COLUMN column_name;


// ------------------------------------------------------->
// Example
// ------------------------------------------------------->
// ALTER TABLE employees
// DROP COLUMN age;


// 👆 This removes the age column from the employees table


// ------------------------------------------------------->
// ⚠️ Important Points
// ------------------------------------------------------->
// The column and all its data are permanently deleted
// You cannot recover it unless you have a backup
// Make sure the column is not used in constraints (like foreign keys)



// ------------------------------------------------------->
// Multiple Columns (Some DBs Support)
// ------------------------------------------------------->
// ALTER TABLE employees
// DROP COLUMN age,
// DROP COLUMN address;


// ------------------------------------------------------->
// SQL Server Example
// ------------------------------------------------------->
// ALTER TABLE employees
// DROP COLUMN age;

// (Same syntax works)

// ------------------------------------------------------->
// 🔑 Quick Difference
// ------------------------------------------------------->
// DROP COLUMN → removes a column
// DROP TABLE → removes entire table
// DELETE → removes rows only