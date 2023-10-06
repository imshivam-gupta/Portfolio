---
title: "Levels of data abstraction: "
subtitle: "Introduction to Database Management Systems"
date: "2021-01-01"
---

Database systems comprise complex data structures. In order to make the system efficient in terms of retrieval of data, and reduce complexity in terms of usability of users, developers use abstraction i.e. hide irrelevant details from the users. This approach simplifies database design. There are three levels of data abstraction:



<img
    src="https://www.guru99.com/images/1/042919_0417_DataIndepen1.png"
    alt="Levels of Abstraction"
    style="width: 500px; height: 300px;"
/>


### Physical Level

This is lowest level of abstraction describes how the data are actually stored. Here Low-level data structures used.  It has Physical schema which describes physical storage structure of DB. The physical level describes complex low-level data structures in detail.  It talks about: Storage allocation (N-ary tree etc), Data compression & encryption etc. Goal is to define algorithms that allow efficient access to data. 

### Logical Level or Conceptual Level

The conceptual schema describes the design of a database at the conceptual level, describes what data are stored in DB, and what relationships exist among those data. User at logical level does not need to be aware about physical-level structures. So, overall, the logical level contains tables (fields and attributes) and relationships among table attributes.  DBA, who must decide what information to keep in the DB use the logical level of abstraction. Goal is the ease to use.

### View Level or External Level

Its is the highest level of abstraction aims to simplify users’ interaction with the system by providing different view to different end-user.  Each view schema describes the database part that a particular user group is interested and hides the remaining database from that user group. At the external level, a database contains several schemas that sometimes called as subschema. The subschema is used to describe the different view of the database.  At views also provide a security mechanism to prevent users from accessing certain parts of DB

##### Real World Example

In case of a bank, the physical level describes how the data are actually stored in the computer memory. The logical level describes the data stored in the database like customer, account, loan, etc. The view level describes the part of the database that is relevant to a particular user. For example, the manager of the bank is interested in the total loan amount granted to a customer, whereas the loan officer is interested in the monthly payment of a loan.

### Instances and Schemas

Instance is the collection of information stored in the DB at a particular moment is called an instance of DB.  Schema is the overall design of the DB is called the DB schema. Schema is structural description of data and doesn’t change frequently. Data may change frequently. DB schema corresponds to the variable declarations (along with type) in a program. 

**Types of Schemas are: **
- Physical schema is database design at the physical level. 
- Logical schema is database design at the logical level.
- A database may also have several schemas at the view level, sometimes called subschemas, that describe different views of the database


### Mapping between Levels

The three levels of DBMS architecture don't exist independently of each other. There must be correspondence between the three levels i.e. how they actually correspond with each other. DBMS is responsible for correspondence between the three types of schema. This correspondence is called Mapping. 

There are basically two types of mapping in the database architecture:
- **Conceptual/ Internal Mapping -** The Conceptual/ Internal Mapping lies between the conceptual level and the internal level. Its role is to define the correspondence between the records and fields of the conceptual level and files and data structures of the internal level.
- **External / Conceptual Mapping -** The external/Conceptual Mapping lies between the external level and the Conceptual level. Its role is to define the correspondence between a particular external and the conceptual view


### Data Independence

**Physical Data Independence**

Physical Data Independence is defined as the ability to make changes in the structure of the lowest level of the Database Management System (DBMS) without affecting the higher-level schemas. Hence, modification in the Physical level should not result in any changes in the Logical or View levels. Example - Changes in the lowest level (physical level) are: creating a new file, storing the new files in the system, creating a new index, etc. It is achieved by modifying the physical layer to logical layer mapping (PL-LL mapping). We must ensure that the modification we have done is localized. 


**Logical Data Independence** 

Logical Data Independence is defined as the ability to make changes in the structure of the middle level of the Database Management System (DBMS) without affecting the highest-level schema or application programs. Hence, modification in the logical level should not result in any changes in the view levels or application programs. Example – Changes in the middle level (logical level) are: adding new attributes to a relation, deleting existing attributes of the relation, etc. Ideally, we would not want to change any application or programs that do not require to use of the modified attribute. Logical Data Independence is achieved by modifying the view layer to logical layer mapping (VL-LL mapping).
 