// ------------------------------------------------------->
// Basic Syntax (MySQL - Modern version)
// ------------------------------------------------------->
// ALTER TABLE table_name
// RENAME COLUMN old_column_name TO new_column_name;


// ------------------------------------------------------->
// Example (MySQL - Modern version)
// ------------------------------------------------------->
// ALTER TABLE employees
// RENAME COLUMN name TO full_name;


// ------------------------------------------------------->
// Basic Syntax (MySQL - Older version)
// ------------------------------------------------------->
// ALTER TABLE table_name
// CHANGE old_column_name new_column_name datatype;


// ------------------------------------------------------->
// Example (MySQL - Older version)
// ------------------------------------------------------->
// ALTER TABLE employees
// CHANGE name full_name VARCHAR(100);


// ------------------------------------------------------->
// Syntax (PostgreSQL)
// ------------------------------------------------------->
// ALTER TABLE table_name
// CHANGE old_column_name new_column_name datatype;


// ------------------------------------------------------->
// ⚠️ Important Points
// ------------------------------------------------------->
// Only the column name changes, data remains safe
// Make sure no queries depend on the old column name
// Always check permissions before altering tables
