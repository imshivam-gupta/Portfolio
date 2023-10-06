---
title: "ER Model"
subtitle: "Database Management Systems"
date: "2021-01-01"
---

ER model stands for an Entity-Relationship model. It is a high-level data model. This model is used to define the data elements and relationship for a specified system. It develops a conceptual design for the database. It also develops a very simple and easy to design view of data. In ER modeling, the database structure is portrayed as a diagram called an entity-relationship diagram.

## ER Model Terminology

### Entity
An entity is an object that exists and is distinguishable from other objects. Example: specific person, company, event, plant. Entities have attributes Example: people have names and addresses. 

### Entity Set
An entity set is a set of entities of the same type that share the same properties. Example: set of all persons, companies, trees, holidays. An entity set is a set of entities of the same type that share the same properties. Example: set of all persons, companies, trees, holidays.

### Attributes – 
These are descriptive properties possessed by all members of an entity set. Example - loan = (loan-number, amount). Domain is the set of permitted values for each attribute. Attribute types - 
- Key Attribute - The key attribute is used to represent the main characteristics of an entity. It represents a primary key. The key attribute is represented by an ellipse with the text underlined. id is key attribute
- Simple and composite attributes - An attribute that composed of many other attributes is known as a composite attribute. The composite attribute is represented by an ellipse, and those ellipses are connected with an ellipse. Example of composite is name that can be divided into first_name , middle_name and last_name
- Single-valued and multi-valued attributes – An attribute can have more than one value. These attributes are known as a multivalued attribute. The double oval is used to represent multivalued attribute. For example, a student can have more than one phone number.
- Derived attributes – An attribute that can be derived from other attribute is known as a derived attribute. It can be represented by a dashed ellipse. These can be computed from other attributes E.g. age, given date of birth.


### Relationship

A relationship is an association among several entities. A relationship set is a mathematical relation among n ≥ 2 entities, each taken from entity sets {(e1, e2, … en) | e1 ∈ E1, e2 ∈ E2, …, en ∈ En} where (e1, e2, …, en) is a relationship.  Example: (Hayes, A-102) ∈ depositor.  An attribute can also be property of a relationship set. For instance, the depositor relationship set between entity sets customer and account may have the attribute access-date.

Degree of a Relationship - 
It refers to number of entity sets that participate in a relationship set. 

**Unary Relation**

A unary relationship, also called recursive, is one in which a relationship exists between occurrences of the same entity set. In this relationship, the primary and foreign keys are the same, but they represent two entities with different roles. Example: In a particular class, we have many students, there are monitors too. So, here class monitors are also students. Thus, we can say that only students are participating here. So the degree of such type of relationship is 1.

<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210824183323/unary.jpg"
    alt="Unary Relation"
    style="width: 400px; height: 200px;"
/>



**Binary Relationship**

Relationship sets that involve two entity sets are binary (or degree two). Generally, most relationship sets in a database system are binary. Example: We have two entity types ‘Student’ and ‘ID’ where each ‘Student’ has his ‘ID’. So, here two entity types are associating we can say it is a binary relationship. Also, one ‘Father’ can have many ‘daughters’ but each ‘daughter’ should belong to only one ‘father. We can say that it is a one-to-many binary relationship.



<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210824183320/binary.jpg"
    alt="Binary Relation"
    style=""
/>

**Ternary Relationship**  

A ternary relationship is a relationship type that 3 entity set. Example: We have three entity types ‘Teacher’, ‘Course’, and ‘Class’. The relationship between these entities is defined as the teacher teaching a particular course, also the teacher teaches a particular class. So, here three entity types are associating we can say it is a ternary relationship.

<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210824183322/tarnary.jpg"
    alt="Ternary Relation"
    style=""
/>


### Mapping Cardinalities

It expresses the number of entities to which another entity can be associated via a relationship set. It is most useful in describing binary relationship sets. For a binary relationship set the mapping cardinality must be one of the following types: 
- One to one - Entity in A associates with at most one entity in B, where A & B are entity sets. And an entity of B is associated with at most one entity of A. E.g., Citizen has Aadhar Card.
- One to many - Entity in A associated with N entity in B. While entity in B is associated with at most one entity in A. E.g., Citizen has Vehicle.
- Many to one - Entity in A associated with at most one entity in B. While entity in B can be associated with N entity in A. E.g., Course taken by Professor.
- Many to many - Entity in A associated with N entity in B. While entity in B also associated with N entity in A. E.g., Customer buys product.

<div class="flex flex-col items-center justify-center w-full ">
    <div class="flex flex-row gap-x-4">
        <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210621113908/Untitleddrawing26-660x131.png"
            alt="One to One"
            style="width: 400px; height: 200px; margin-right: 30px;"
        />
        <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210621115802/Untitleddrawing31-660x255.png"
            alt="One to Many"
            style="width: 400px; height: 200px;"
        />
    </div>
    <div class="flex flex-row gap-x-4">
        <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210621115918/Untitleddrawing32-660x144.png"
            alt="Many to One"
            style="width: 400px; height: 200px; margin-right: 30px;"
        />
        <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210621130534/Untitleddrawing34-660x260.png"
            alt="Many to Many"
            style="width: 400px; height: 200px;"
        />
    </div>
</div>