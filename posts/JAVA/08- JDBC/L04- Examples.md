---
title: "Common Tasks"
subtitle: "Common Tasks"
date: "2023-07-12"
---

## Connecting a JAVA application to MYSQL database

```java
import java.sql.*;

public class Connect{
    public static void main(String args[]){
        Connection conn = null;
        try{
            String userName = "root";
            String password = "root";
            String url = "jdbc:mysql://10.14.100.141/test";
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            conn = DriverManager.getConnection(url, userName, password);
            System.out.println("Database connection established");
        }  catch (Exception e){
            System.err.println("Cannot connect to database server");
        } finally {
            if (conn != null){
                try{
                    conn.close();
                    System.out.println("Database connection terminated");
                } catch (Exception e){
                }
            }
        }
    }
}
```

## Creating a table

```java
import java.sql.*;

public class App {
   static final String DB_URL = "jdbc:mysql://localhost:3306/test?useSSL=false";
   static final String USER = "root";
   static final String PASS = "Shivam@12";
   static final String QUERY = "SELECT * FROM stud";

   public static void main(String[] args) {
      // Open a connection
	   Connection conn = null;
	   Statement stmt = null;
	   ResultSet rs = null;
	   String TableName;
      try {
//    		  clazz.getDeclaredConstructor("com.mysql.jdbc.Driver").newInstace();
    		  conn = DriverManager.getConnection(DB_URL, USER, PASS);
    		  System.out.println("Connection Established");
    		  stmt = conn.createStatement();
    		  stmt.execute("show tables");
    		  rs = stmt.getResultSet();
    		  System.out.println("Result before creating table");
    		  
    		  while(rs.next()) {
    			  TableName = rs.getString(1);
    			  System.out.println("Table Name: "+ TableName + "\n");
    		  }
    		  
    		  stmt.execute("CREATE TABLE Students (Roll INTEGER PRIMARY KEY, name VARCHAR(30), Marks INTEGER NOT NULL, Grade VARCHAR(2))");
    		  stmt.execute("show tables");
              rs = stmt.getResultSet();
              System.out.println("Result after creating table");
              while(rs.next()){
                  TableName = rs.getString(1);
                  System.out.println("Table name: " + TableName);
              }
      } catch(SQLException e){
                  System.err.println("SQL Exception: " + e.getMessage());
                  System.err.println("SQL State: " + e.getSQLState());
                  System.err.println("Vendor Error: " + e.getErrorCode()); 
      } catch (Exception e) {
         System.out.println("Error conncting");
      } finally {
    	  if(conn==null) {
    		  try {
    			  conn.close();
    			  System.out.println("Closed");
    		  } catch(Exception e) {}
    	  }
      }
   }
}
```

