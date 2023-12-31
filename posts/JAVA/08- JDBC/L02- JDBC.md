---
title: "JDBC Java Database Connectivity"
subtitle: "JDBC Java Database Connectivity"
date: "2023-07-12"
---

JDBC is a standard JAVA API for handling database related activities. In java package java.sql contains all the classes and interfaces required for JDBC. It includes 3 important interfaces and 1 class.

Interfaces:
- **Driver:** The interface that every driver class must implement. 
- **Connection:** A connection (session) with a specific database.
- **Statement:** The object used for executing a static SQL statement and returning the results it produces.
- Other interfaces: Array, Blob, CallableStatement, Clob, DatabaseMetaData, DriverAction, NClob, ParameterMetaData, PreparedStatement, Ref, ResultSet, ResultSetMetaData, RowId, Savepoint, SQLData, SQLInput, SQLOutput, SQLType, SQLXML, Struct, Wrapper

Classes:
- **DriverManager:** The basic service for managing a set of JDBC drivers
- Date - A thin wrapper around a millisecond value that allows JDBC to identify this as an SQL DATE value.
- **ResultSet:** The class retrieves the results of a database query. It acts as an iterator to allow you to move through its data.
- **SQL Exception:** An exception that provides information on a database access error or other errors.
- DriverPropertyInfo - Driver properties for making a connection.
- SQLPermission - The permission for which the SecurityManager will check when code that is running an application with a SecurityManager enabled, calls the DriverManager.
- Time	- A thin wrapper around the java.util.Date class that allows the JDBC API to identify this as an SQL TIME value.
- Timestamp - A thin wrapper around java.util.Date that allows the JDBC API to identify this as an SQL TIMESTAMP value.
- Types	- The class that defines the constants that are used to identify generic SQL types, called JDBC types.


JDBC is compatible with all types of Relational Databases like Oracle, MySQL, Sybase, Microsoft SQL etc.

## Steps of JDBC:

- Load a JDBC driver
- Create connections
- Connect to the data source
- Execute SQL statements
- Map results to Java data types


#### **Load a JDBC driver**

Code to load a JDBC driver:

```java
// mysql database driver
Class.forName("com.mysql.jdbc.Driver").newInstance();

// oracle database driver
Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();

// sql server database driver
Class.forName("com.microsoft.jdbc.sqlserver.jdbc.SQLServerDriver").newInstance();
```


#### **Create connections**

Code to create a connection:

```java
Connection con  = null;
String userName = "root";
String password = "root";
String url = "jdbc:mysql://localhost:3306/test";
con = DriverManager.getConnection(url, userName, password);
```


## Types of Statements 

- Statement: For executing simple SQL statement.
- PreparedStatement: For executing precompiled SQL statement.
- CallableStatement: For executing database stored procedures.


#### Execute SQL statements

Create a statement object  from the connection object, and then execute the statement object.


```java
Statement stmt = null;
stmt = con.createStatement();

// execute query
stmt.execute("show tables");
stmt.execute("INSERT INTO Students VALUES ('1', 'John', '20')");
```

#### Methods of Statement interface:
- execute(): Generic method for executing simple statements, stored procedures, prepared statements it can be used when the statement is either related to query or update this method returns true (if query user row) otherwise returns false
- executeQuery(): Executes sql query and returns data in a table (ResultSet) object. This method is used for Sql Command that expects a return data from a database.
- executeUpdate(): Used to update, insert, update, delete, create table, drop table alter table. Return the number of rows that are affected in the database
- getMaxRows(): Determines the number of rows a ResultSet can contain.

#### PrepareStatement

```java
PreparedStatement pstmt = null;
String QryString = "INSERT INTO Students (RollNo, Name, Age) VALUES (?, ?, ?)";
pstmt = con.prepareStatement(QryString);
pstmt.setInt(1, 1);
pstmt.setString(2, "John");
pstmt.setInt(3, 20);
pstmt.executeUpdate();
```


#### ResultSet

A ResultSet provides access to a table of data generated by executing a Statement. Only one ResultSet per Statement can be open at once. The table rows are retrieved in sequence. The ResultSet maintains a cursor pointing to its current row of data. The next() method moves this cursor to the next row.


Useful methods of ResultSet interface:
- boolean next(): Attempts to move to the next row in ResultSet. The first call to next() positions cursor at the first row. It returns true if the next row exists otherwise returns false.
- Type getType(int columnIndex): Returns the given field as the give type. Fields index starts from 1.
- Type getType(String columnName): Same as above but field name is given instead of index.
- void close(): It dispose the ResultSet and allows us to reuse the Statement that created it.
- int findColumn(String columnName): Returns the index of the given column name.


Matching SQL and Java types:

| SQL Type | Java Type | ResultSet getter method |
| --- | --- | --- |
| CHAR | String | getString() |
| BIT | boolean | getBoolean() |
| VARCHAR | String | getString() |
| DOUBLE | Double | getDouble() |
| FLOAT | Double | getDouble() |
| INTEGER | Integer | getInt() |
| REAL | Double | getDouble() |
| DATE | java.sql.Date | getDate() |
| TIME | java.sql.Time | getTime() |
| TIMESTAMP | java.sql.Timestamp | getTimestamp() |



Example:

```java
ResultSet rs = stmt.executeQuery("SELECT * FROM Students");
String NameString, RollNoString, AgeString;

while (rs.next()) {
    RollNoString = rs.getString("RollNo");
    NameString = rs.getString("Name");
    AgeString = rs.getString("Age");
    System.out.println(RollNoString + " " + NameString + " " + AgeString);
}
```