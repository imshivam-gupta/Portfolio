---
title: "DBMS Architecture"
subtitle: "Introduction to Database Management Systems"
date: "2021-01-01"
---

Database architecture can be seen as a single tier or multi-tier. But logically, database architecture is of two types like: 2-tier architecture and 3-tier architecture. 

### 1-tier Architecture

The client, server & DB all present on the same machine. In this architecture, the database is directly available to the user.  It means the user can directly sit on the DBMS and uses it. Any changes done here will directly be done on the database itself.  It doesn't provide a handy tool for end users. The 1-Tier architecture is used for development of the local application, where programmers can directly communicate with the database for the quick response. 

<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/20230509110722/DBMS-1-Tier-Architecture.webp"
    alt="1-tier Architecture"
    style="width: 500px; height: 300px;"
/>



### 2-tier Architecture

In  2 tier architecture, the application logic is either buried inside the user interface on the client or within the database on the server.  The 2-tier architecture is divided into two parts:

- Client Application (Front End) - It is the user interface of the application. It runs on the client machine and interacts with the end user. It is responsible to collect the user's request and send it to the server for further processing. It is also responsible to display the result received from the server to the end user. It is also known as the front end of the application. It is developed using programming languages like C#, Java, etc.
- Database Server (Back End) - It is the database management system that stores the data and manages the database. It is responsible to process the client request and send the response back to the client.  It is also known as the back end of the application. It is developed using SQL Server, Oracle, MySQL, etc.

API standards like ODBC & JDBC are used to interact between client and server.The 2-Tier architecture is same as basic client-server. The user interfaces and application programs are run on the client-side. To communicate with the DBMS, client-side application establishes a connection with the server side.

<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/33-3.png"
    alt="2-tier Architecture"
    style="width: 500px; height: 300px;"
/>


### 3-tier Architecture

App is partitioned into 3 logical components. Client machine is just a frontend and doesn’t contain any direct DB calls.  Client machine communicates with App server, and App server communicates with DB system to access data. Business logic, what action to take at that condition is in App server itself.  T3 architecture are best for WWW Applications.  End user has no idea about the existence of the database beyond the application server. The database also has no idea about any other user beyond the application. The 3-Tier architecture is used in case of large web application.  Advantages are Scalability due to distributed application servers. Data integrity, App server acts as a middle layer between client and DB, which minimize the chances of data corruption. Security, client can’t directly access DB, hence it is more secure.

<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/34-1.png"
    alt="3-tier Architecture"
    style="width: 500px; height: 300px;"
/>