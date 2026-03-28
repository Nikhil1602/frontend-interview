# 📊 SQL - Structured Query Language

- SQL (Structured Query Language) is a language used to communicate with databases. It allows you to store, retrieve, update, and manage data in a structured way.

### 💡 What You Can Do with SQL?

With SQL, you can:

- 🔍 Fetch data → using `SELECT`
- ➕ Insert data → using `INSERT`
- ✏️ Update data → using `UPDATE`
- ❌ Delete data → using `DELETE`
- 🗂️ Create tables/databases → using `CREATE`

We can perform all the CRUD operations.
`CRUD` stands for `Create`, `Read`, `Update`, and `Delete`.


### 🏗️ Where SQL is Used?

SQL is used in almost every application:

- Banking systems 🏦
- E-commerce apps 🛒
- Social media platforms 📱
- Company dashboards 📊

Popular databases that use SQL:

```
- MySQL
- PostgreSQL
- Oracle
- SQL Server
```


## 🔤 Data Types in SQL

SQL provides a variety of data types to define what kind of data a column can store. While exact names may vary slightly across databases like MySQL or PostgreSQL, the core categories remain the same.

- [Numeric Data types](./numeric-data-type.js)
- [String & Char Data types](./string-data-type.js)
- [Date Data types](./date-data-type.js)
- [Binary Data types](./binary-data-type.js)
- [Other Data types](./other-data-type.js)

## 🔢 Operators in SQL

- Refer this [image](https://media.geeksforgeeks.org/wp-content/uploads/20260316144312088410/sql_operators.webp)
- Refer this [video](https://www.youtube.com/watch?v=NJZ206_iJ0I)


## 🗄️ Operations in SQL

- [Creating database](./creating-database.js)
- [Deleting database](./deleting-database.js)
- [Creating table](./creating-table.js)
- [Reading tables](./reading-table.js)
- [Renaming table](./renaming-table.js)
- [Deleting table](./deleting-table.js)
- [Inserting data (row) into table](./inserting-data.js)
- [Reading data (row) in table](./reading-data.js)
- [Updating data (row) in table](./updating-data.js)
- [Deleting data (row) in table](./deleting-data.js)
- [Inserting column in table](./inserting-column.js)
- [Reading all columns in table](./reading-columns.js)
- [Renaming column in table](./renaming-column.js)
- [Deleting column in table](./deleting-column.js)

### Join Operations in SQL

- [`INNER JOIN`](./inner-join.js)
- [`LEFT JOIN`](./left-join.js)
- [`RIGHT JOIN`](./right-join.js)
- [`FULL JOIN`](./full-join.js)

## Commands in SQL

Watch to know [Basic SQL Commands](https://www.youtube.com/shorts/DXpsNQqSFQw)

### Some common commands

- SELECT
- FROM
- WHERE
- AS
- AND / OR / BETWEEN
- IN
- NOT IN
- LIKE
- IS NULL / IS NOT NULL
- GROUP BY
- HAVING
- DISTINCT
- ORDER BY
- LIMIT

### Built-in functions

- [Aggregate functions](./aggregate-functions.js)
- [String functions](./string-functions.js)
- [Numeric functions](./numeric-functions.js)
- [Date functions](./date-functions.js)
- [Conversion functions](./conversion-function.js)

## 🏋️ Practice Questions

- Refer this [link](https://www.programiz.com/sql/online-compiler) and solve the below questions:

### 🟢 Beginner Level

- Retrieve all customers from the USA.
- List all customers whose age is greater than 25.
- Get the first and last names of all customers from the UK.
- Show all orders where the amount is greater than 500.
- Find all customers whose first name is "John".

### 🟡 Intermediate Level

- Retrieve all orders along with the customer’s first name.
- List customers who have placed at least one order.
- Find customers who have not placed any orders.
- Get total number of orders placed by each customer.
- Find the maximum order amount from the Orders table.

### 🟠 GROUP BY & Aggregation

- Find the total amount spent by each customer.
- Get the average order amount for each customer.
- Find customers who have spent more than 500 in total.
- Count how many orders each customer has placed.

### 🔵 JOIN-Based Questions

- Retrieve customer names and their order items.
- Show all customers and their orders (even if they have none).
- Get customer names along with their shipping status.
- List customers who have Pending shipments.
- Find customers whose orders are Delivered.

### 🔴 Advanced Level

- Find the customer who has spent the highest total amount.
- Retrieve customers who have more than 1 order.
- Find customers who placed orders but have no shipping record.
- Get customers who have both orders and delivered shipments.
- Find duplicate first names in the Customers table (SELF JOIN).

### ⚫ Challenging / Interview Level

- Find the second highest order amount.
- Get the top 2 customers by total spending.
- Find customers who ordered the same item as another customer.
- Retrieve customers whose total spending is above average.
- Find customers with only pending shipments (no delivered ones).
- Write a query to rank customers based on total spending.