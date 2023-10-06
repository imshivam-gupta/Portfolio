---
title: "Database Users and Administrator"
subtitle: "Introduction to Database Management Systems"
date: "2021-01-01"
---


## Database Users and their Interface


#### Naive users

These are unsophisticated users who interact with the system by using predefined UI like web or mobile applications. The typical user interface for naive users is a forms interface, where the user can fill in appropriate fields of the form. Naive users may also simply read reports generated from the database. Example student who enrols in google classroom registers class by web interface and application first verifies identity of user and then allows her to access form where she enter required info. The form info is sent back to server checking classroom in dB if present then in table of students of classroom student info is added.


#### Application programmers 
Application Program are the back-end programmers who writes the code for the application programs. They are the computer professionals. These programs could be written in Programming languages such as Visual Basic, Developer, C, FORTRAN, COBOL etc. 

#### Sophisticated Users 
Sophisticated users can be engineers, scientists, business analyst, who are familiar with the database. They interact with system without writing program. They make their requests either using a database query language or by using tool like data analysis software Example is data analyst. 

#### Database Designers
Database Designers are the users who design the structure of database which includes tables, indexes, views, constraints, triggers, stored procedures. He/she controls what data must be stored and how the data items to be related.


## Database Administrator

A person who has central control of both the data and the programs that access those data over the system is called a database administrator (DBA). The functions of a DBA include:
- Schema definition: The DBA creates the original database schema by executing a set of data definition statements in the DDL. 
- Storage structure and access-method definition – DBA may specify some parameters pertaining to physical organization of data and indices to be created. 
- Schema and physical-organization modification: The DBA carries out changes to the schema and physical organization to reflect the changing needs of the organization, or to alter the physical organization to improve performance. 
- Granting of authorization for data access: By granting different types of authorization, the database administrator can regulate which parts of the database various users can access. The authorization information is kept in a special system structure that the database system consults whenever someone attempts to access the data in the system
- Routine maintenance: Examples of the database administrator’s routine maintenance activities are: Periodically backing up the database, either onto tapes or onto remote servers, to prevent loss of data in case of disasters such as flooding. Ensuring that enough free disk space is available for normal operations, and upgrading disk space as required. Monitoring jobs running on the database and ensuring that performance is not degraded by very expensive tasks submitted by some users

