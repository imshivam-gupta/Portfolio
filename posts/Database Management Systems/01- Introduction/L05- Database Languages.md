---
title: "Database Languages"
subtitle: "Introduction to Database Management Systems"
date: "2021-01-01"
---

The Data Languages are categorized into four different types based upon the various operations performed by the language. These include:

### Data Definition Language (DDL)

Data Definition Language (DDL) is a set of special commands that allows us to define and modify the structure and the metadata of the database. These commands can be used to create, modify, and delete the database structures such as schema, tables, indexes, etc. Since DDL commands can alter the structure of the whole database and every change implemented by a DDL command is auto-committed (the change is saved permanently in the database), these commands are normally not used by an end-user (someone who is accessing the database via an application). Common DDL commands include: CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT, etc.

### Data manipulation language (DML)

Data Manipulation Language (DML) is a set of special commands that allows us to access and manipulate data stored in existing schema objects. These commands are used to perform certain operations such as insertion, deletion, updation, and retrieval of the data from the database. These commands deal with the user requests as they are responsible for all types of data modification. The DML commands that deal with the retrieval of the data are known as Data Query language. NOTE: The DML commands are not auto-committed i.e., the changes and modifications done via these commands can be rolled back. Common DML commands include: SELECT, INSERT, UPDATE, DELETE, MERGE, CALL, EXPLAIN PLAN, LOCK TABLE, etc.

### Data control language (DCL)

Data Control Language (DCL) is a set of special commands that are used to control the user privileges in the database system. The user privileges include ALL, CREATE, SELECT, INSERT, UPDATE, DELETE, EXECUTE, etc. We require data access permissions to execute any command or query in the database system. This user access is controlled using the DCL statements. These statements are used to grant and revoke user access to data or the database. DCL commands are transactional i.e., these commands include rollback parameters. Common DCL commands include: GRANT, REVOKE, etc.

### Transaction Control Language (TCL)

Transaction Control Language (TCL) is a set of special commands that deal with the transactions within the database. A transaction is a collection of related tasks that are treated as a single execution unit by the DBMS software. Hence, transactions are responsible for the execution of different tasks within a database. The modifications performed using the DML commands are executed or rollbacked with the help of TCL commands. These commands are used to keep a check on other commands and their effects on the database. These include: COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION, etc.

