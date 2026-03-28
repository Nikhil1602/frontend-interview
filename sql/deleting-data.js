// ------------------------------------------------------->
// Basic Syntax
// ------------------------------------------------------->
// DELETE FROM table_name
// WHERE condition;


// ------------------------------------------------------->
// Example 1: Delete a Specific Row
// ------------------------------------------------------->
// DELETE FROM employees
// WHERE id = 1;

// 👆 Deletes the employee whose id = 1


// ------------------------------------------------------->
// Example 2: Delete Multiple Rows
// ------------------------------------------------------->
// DELETE FROM employees
// WHERE department = 'HR';

// 👆 Deletes all employees from the HR department


// ------------------------------------------------------->
// ⚠️ Important Warning
// ------------------------------------------------------->
// DELETE FROM employees;

// 👆 Deletes ALL rows from the table
// (very dangerous if used by mistake)


// ------------------------------------------------------->
// 🔑 Key Points
// ------------------------------------------------------->
// DELETE removes data only, not the table
// Always use WHERE to target specific rows
// Without WHERE → entire table data is deleted