---
title: "ER Model to Relational Model"
subtitle: "Database Management Systems"
date: "2021-01-01"
---


Both ER-Model and Relational Model are abstract logical representation of real world enterprises. Because the two models implies the similar design principles, we can convert ER design into Relational design. Converting a DB representation from an ER diagram to a table format is the way we arrive at Relational DB-design from an ER diagram. ER diagram notations to relations:

### Strong Entity 
Becomes an individual table with entity name, attributes becomes columns of the relation. Entity’s Primary Key (PK) is used as Relation’s PK. FK are added to establish relationships with other relations.

### Weak Entity 
A table is formed with all the attributes of the entity. PK of its corresponding Strong Entity will be added as FK. PK of the relation will be a composite PK, {FK + Partial discriminator Key}.

### Single Values Attributes
Represented as columns directly in the tables/relations.

### Composite Attributes 
Handled by creating a separate attribute itself in the original relation for each composite attribute. e.g., Address: {street-name, house-no}, is a composite attribute in customer relation, we add address-street- name & address-house-name as new columns in the attribute and ignore “address” as an attribute.

### Multivalued Attributes 
New tables (named as original attribute name) are created for each multivalued attribute. PK of the entity is used as column FK in the new table. Multivalued attribute’s similar name is added as a column to define multiple values. PK of the new table would be {FK + multivalued name}. e.g., For Strong entity Employee, dependent-name is a multivalued attribute. New table named dependent-name will be formed with columns emp-id, and dname. PK: {emp-id, name} FK: {emp-id}

### Derived Attributes 
Not considered in the tables.

### Generalisation

**Method-1:** Create a table for the higher level entity set. For each lower-level entity set, create a table that includes a column for each of the attributes of that entity set plus a column for each attribute of the primary key of the higher-level entity set. For e.g., Banking System generalisation of Account - saving & current. Table 1: account (account-number, balance) Table 2: savings-account (account-number, interest-rate, daily-withdrawal-limit) Table 3: current-account (account-number, overdraft-amount, per-transaction-charges) 

**Method-2:** An alternative representation is possible, if the generalisation is disjoint and complete—that is, if no entity is a member of two lower-level entity sets directly below a higher-level entity set, and if every entity in the higher level entity set is also a member of one of the lower-level entity sets. Here, do not create a table for the higher-level entity set. Instead, for each lower-level entity set, create a table that includes a column for each of the attributes of that entity set plus a column for each attribute of the higher-level entity sets. Tables would be: Table 1: savings-account (account-number, balance, interest-rate, daily-withdrawal-limit) Table 2: current-account (account-number, balance, overdraft-amount, per-transaction-charges) 

**Drawbacks of Method-2:** If the second method were used for an overlapping generalisation, some values such as balance would be stored twice unnecessarily. Similarly, if the generalisation were not complete—that is, if some accounts were neither savings nor current accounts—then such accounts could not be represented with the second method.

### Aggregation 
Table of the relationship set is made. Attributes includes primary keys of entity set and aggregation sets entities. Also, add descriptive attribute if any on the relationship.



### Example

<div class="flex flex-row justify-center items-center">
    <img src="https://static.javatpoint.com/dbms/images/dbms-reduction-of-er-diagram-into-table.png" alt="ER Model" style="width: 500px; height: 420px; margin-right:20px;"
    >
    <img src="https://static.javatpoint.com/dbms/images/dbms-reduction-of-er-diagram-into-table2.png" alt="Relational Model" style="width: 500px; height: 420px;"
    >
</div>








