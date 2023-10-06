---
title: "Representation of ER Model"
subtitle: "Database Management Systems"
date: "2021-01-01"
---

<img
    src="https://images.edrawsoft.com/articles/er-diagram-symbols/chens-notation-1.png"
    alt="ER Model Representation"
    style="width: 500px; height: 300px;"
/>

**Some rules for ER Diagrams:**
- Entity set is represented by a rectangle.
- Relationship is represented by a diamond.
- Linking attributes to entity set and entity set to relationship is represented by a line.
- Attributes are represented by an oval.
- Multivalued attributes are represented by a double oval.
- Derived attributes are represented by a dashed oval.
- Key attribute is underlined.
- Weak entity set is represented by a double rectangle.

<img
    src="https://www.techantena.com/wp-content/uploads/2020/11/ER-Diagram-Examples-3.png"
    alt="ER Model Example"
    style="width: 500px; height: 300px;"
/>


## Participation in Relationship Sets

**Total participation (indicated by double line):** Every entity in the entity set participates in at least one relationship in the relationship set. Example participation of loan in borrower is total i.e. every loan must have a customer associated to it via borrower.

**Partial participation:** Some entities may not participate in any relationship in the relationship set. E.g. participation of customer in borrower is partial. 
Cardinality limits can also express participation constraint

<div class="flex flex-row items-center justify-center">
    <img
        src="https://www.tutorialspoint.com/assets/questions/images/189677-1532329149.png"
        alt="Total Participation"
        style="width: 300px; height: 200px; margin-right:20px;"
    >
    <img
        src="https://www.tutorialspoint.com/assets/questions/images/187839-1532329239.png"
        alt="Partial Participation"
        style="width: 300px; height: 200px;"
    />
</div>

## Weak Entity Sets

- An entity type should have a key attribute which uniquely identifies each entity in the entity set, but there exists some entity type for which key attribute can’t be defined. These are called Weak Entity type.  The entity sets which do not have sufficient attributes to form a primary key are known as weak entity sets and the entity sets which have a primary key are known as strong entity sets. 
- The weak entities have total participation constraint (existence dependency) and one-to-many relationship set  in its identifying relationship with owner identity. Weak entity types have partial keys. Partial Keys are set of attributes with the help of which the tuples of the weak entities can be distinguished and identified. 
- Weak entity is depend on strong entity to ensure the existence of weak entity. Like strong entity, weak entity does not have any primary key, It has partial discriminator key. Weak entity is represented by double rectangle. The relation between one strong and one weak entity is represented by double diamond. 
- Weak entities are represented with double rectangular box in the ER Diagram and the identifying relationships are represented with double diamond. Partial Key attributes are represented with dotted lines. 
- In the below ER Diagram, ‘Payment’ is the weak entity. ‘Loan Payment’ is the identifying relationship and ‘Payment Number’ is the partial key. Primary Key of the Loan along with the partial key would be used to identify the records. 

![Weak Entity](https://media.geeksforgeeks.org/wp-content/uploads/20190801135655/333.jpeg)