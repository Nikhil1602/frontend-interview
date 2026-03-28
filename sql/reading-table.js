// ------------------------------------------------------->
// Basic Syntax (MySQL / PostgreSQL)
// ------------------------------------------------------->
// SHOW TABLES;

// 👆 Displays all tables in the current database

// ------------------------------------------------------->
// Using INFORMATION_SCHEMA (Works in most DBs)
// ------------------------------------------------------->
// SELECT table_name
// FROM information_schema.tables
// WHERE table_schema = 'your_database_name';

// 👆 More flexible and works across different SQL systems


// ------------------------------------------------------->
// SQL Server
// ------------------------------------------------------->
// SELECT name FROM sys.tables;

// 👆 Fetches only name and salary columns


// ------------------------------------------------------->
// 🧠 Key Points
// ------------------------------------------------------->
// These commands only list table names
// They do not show any data inside tables


// ------------------------------------------------------->
// 💡 Bonus (See Table Structure)
// ------------------------------------------------------->

// If you want to see columns (not data):
// ------------------------------------------------------->
// DESCRIBE table_name;
// ------------------------------------------------------->

// OR

// ------------------------------------------------------->
// SHOW COLUMNS FROM table_name;
// ------------------------------------------------------->