// ------------------------------------------------------->
// Basic Syntax
// ------------------------------------------------------->
// UPDATE table_name
// SET column1 = value1,
//     column2 = value2
// WHERE condition;


// ------------------------------------------------------->
// Example 1: Update Single Column
// ------------------------------------------------------->
// UPDATE employees
// SET salary = 60000
// WHERE id = 1;

// 👆 Updates salary of employee with id = 1


// ------------------------------------------------------->
// Example 2: Update Multiple Columns
// ------------------------------------------------------->
// UPDATE employees
// SET salary = 65000,
//     department = 'IT'
// WHERE id = 2;

// 👆 Updates both salary and department


// ------------------------------------------------------->
// Example 3: Update Without WHERE (⚠️ Dangerous)
// ------------------------------------------------------->
// UPDATE employees
// SET salary = 50000;

// 👆 Updates all rows in the table


// ------------------------------------------------------->
// Example 4: Update with Condition
// ------------------------------------------------------->
// UPDATE employees
// SET salary = salary + 5000
// WHERE department = 'HR';

// 👆 Increases salary of all HR employees by 5000


// 🧠 Key Points
// UPDATE is used to modify existing data
// Always use WHERE to avoid updating all rows
// You can update one or multiple columns at once