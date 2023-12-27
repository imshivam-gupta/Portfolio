---
title: "DBMS and File System"
subtitle: "Introduction to Database Management Systems"
date: "2021-01-01"
---

#### DBMS
Database management system is a software which is used to manage the database. For example: MySQL, Oracle, etc are a very popular commercial database which is used in different applications. DBMS provides an interface to perform various operations like database creation, storing data in it, updating data, creating a table in the database and a lot more. It provides protection and security to the database. In the case of multiple users, it also maintains data consistency.

#### File System
File System is a method used to organize and store data in a hierarchical structure on a computer's storage medium (e.g., hard disk). It manages files and directories (folders) and provides basic operations like creating, deleting, and  renaming files. File Systems are simple and effective for storing small amounts of data, but they lack advanced features for data organization, retrieval, and security. Examples of File Systems include FAT32, NTFS (Windows), ext4 (Linux), HFS+ (macOS), etc. Example: Let's say we have a folder named "Photos" on your computer's hard drive. Inside the "Photos" folder, we may have various image files like "vacation.jpg," "family.jpg," etc. Each file is independent, and there is no inherent relationship or structure between them within the File System.

#### Difference between DBMS and File System

| Basis | File System | DBMS |
|-------|-------------|------|
| Structure	| The file system is a way of arranging the files in a storage medium within a computer.	| DBMS is software for managing the database.| 
| Data Redundancy	| Redundant data can be present in a file system.	| In DBMS there is no redundant data.| 
| Backup and Recovery	| It doesn’t provide backup and recovery of data if it is lost.	| It provides backup and recovery of data even if it is lost.| 
| Query processing	| There is no efficient query processing in the file system.| 	Efficient query processing is there in DBMS.| 
| Consistency| 	There is less data consistency in the file system.	| There is more data consistency because of the process of normalization.| 
| Complexity	| It is less complex as compared to DBMS.	| It has more complexity in handling as compared to the file system.| 
| Security Constraints	| File systems provide less security in comparison to DBMS.| 	DBMS has more security mechanisms as compared to file systems.| 
| Cost	| It is less expensive than DBMS.	| It has a comparatively higher cost than a file system.| 
| Data Independence	| There is no data independence.	| In DBMS data independence exists.| 
| User Access	| Only one user can access data at a time.	| Multiple users can access data at a time.| 
| Meaning| 	The user not required to write procedures.| 	The user has to write procedures for managing databases| 
| Sharing | 	Data is distributed in many files. So, not easy to share data	| Due to centralized nature sharing is easy| 
| Data Abstraction| 	It give details of storage and representation of data| 	It hides the internal details of Database| 
| Integrity Constraints	| Integrity Constraints are difficult to implement	| Integrity constraints are easy to implement| 
| Attributes	| To access data in a file , user requires attributes such as file name ,file location.	| No such attributes are required.| 
| Example	| Cobol, C++	| Oracle, SQL Server| 


#### Advantages of DBMS over File System

- Data redundancy and inconsistency: Redundancy is the concept of repetition of data i.e. each data may have more than a single copy. The file system cannot control the redundancy of data as each user defines and maintains the needed files for a specific application to run. There may be a possibility that two users are maintaining the data of the same file for different applications. Hence changes made by one user do not reflect in files used by second users, which leads to inconsistency of data. Whereas DBMS controls redundancy by maintaining a single repository of data that is defined once and is accessed by many users. As there is no or less redundancy, data remains consistent.
- Data sharing: The file system does not allow sharing of data or sharing is too complex. Whereas in DBMS, data can be shared easily due to a centralized system.
- Data concurrency: Concurrent access to data means more than one user is accessing the same data at the same time. Anomalies occur when changes made by one user get lost because of changes made by another user. The file system does not provide any procedure to stop anomalies. Whereas DBMS provides a locking system to stop anomalies to occur.
- Data searching: For every search operation performed on the file system, a different application program has to be written. While DBMS provides inbuilt searching operations. The user only has to write a small query to retrieve data from the database.
- Data integrity: There may be cases when some constraints need to be applied to the data before inserting it into the database. The file system does not provide any procedure to check these constraints automatically. Whereas DBMS maintains data integrity by enforcing user-defined constraints on data by itself.
- System crashing: In some cases, systems might have crashed due to various reasons. It is a bane in the case of file systems because once the system crashes, there will be no recovery of the data that’s been lost. A DBMS will have the recovery manager which retrieves the data making it another advantage over file systems. 
- Data security: A file system provides a password mechanism to protect the database but how long can the password be protected? No one can guarantee that. This doesn’t happen in the case of DBMS. DBMS has specialized features that help provide shielding to its data. 
- Backup: It creates a backup subsystem to restore the data if required.
- Interfaces: It provides different multiple user interfaces like graphical user interface and application program interface.
- Easy Maintenance: It is easily maintainable due to its centralized nature.