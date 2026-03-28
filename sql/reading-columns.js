// ------------------------------------------------------->
// Basic Syntax (MySQL)
// ------------------------------------------------------->
// DESCRIBE table_name;

// OR

// SHOW COLUMNS FROM table_name;

// 👉 This will show:

// Column names
// Data types
// Constraints

// ------------------------------------------------------->
// Using INFORMATION_SCHEMA (Works in most DBs)
// ------------------------------------------------------->
// SELECT column_name
// FROM information_schema.columns
// WHERE table_name = 'your_table_name';

// 👆 This returns only column names

// ------------------------------------------------------->
// SQL Server
// ------------------------------------------------------->
// SELECT COLUMN_NAME
// FROM INFORMATION_SCHEMA.COLUMNS
// WHERE TABLE_NAME = 'your_table_name';


// ------------------------------------------------------->
// PostgreSQL
// ------------------------------------------------------->
// SELECT column_name
// FROM information_schema.columns
// WHERE table_name = 'your_table_name';


// ------------------------------------------------------->
// ⚡ Trick (Less Preferred)
// ------------------------------------------------------->
// SELECT * FROM table_name LIMIT 0;

// 👆 Returns no rows, but shows column headers


// 🧠 Key Idea
// You are not “reading data”
// You are reading metadata (structure of table)