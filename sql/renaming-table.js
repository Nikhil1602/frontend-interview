// ------------------------------------------------------->
// Basic Syntax (MySQL)
// ------------------------------------------------------->
// RENAME TABLE old_table_name TO new_table_name;


// ------------------------------------------------------->
// Example
// ------------------------------------------------------->
// RENAME TABLE employees TO staff;

// 👆 This renames the table from employees → staff


// ------------------------------------------------------->
// Alternative Syntax (Works in MySQL, PostgreSQL, SQL Server)
// ------------------------------------------------------->
// ALTER TABLE old_table_name
// RENAME TO new_table_name;

// ------------------------------------------------------->
// Example
// ------------------------------------------------------->
// ALTER TABLE employees
// RENAME TO staff;


// ⚠️ Important Points
// Only the table name changes, data remains safe
// Make sure the new name doesn’t already exist
// You need proper permissions to rename


// 🧠 DB-Specific Notes
// MySQL → supports both RENAME TABLE and ALTER TABLE
// PostgreSQL → uses ALTER TABLE ... RENAME TO
// SQL Server → uses sp_rename