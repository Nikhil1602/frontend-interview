// ------------------------------------------------------->
// Basic Syntax
// ------------------------------------------------------->
// DROP TABLE table_name;


// ------------------------------------------------------->
// Example
// ------------------------------------------------------->
// DROP TABLE employees;

// 👉 This will:

// Delete the employees table
// Remove all data + structure permanently


// ------------------------------------------------------->
// Safer Version
// ------------------------------------------------------->
// DROP TABLE IF EXISTS employees;

// 👉 Prevents error if the table doesn’t exist


// ------------------------------------------------------->
// 🧠 Related Commands (Important Difference)
// ------------------------------------------------------->
// DROP TABLE → deletes table completely
// DELETE FROM table_name → deletes rows only
// TRUNCATE TABLE table_name → deletes all rows but keeps structure


// ------------------------------------------------------->
// 💡 Quick Tip
// ------------------------------------------------------->
// Use:

// DROP → when you don’t need the table anymore
// DELETE / TRUNCATE → when you only want to clear data