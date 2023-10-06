---
title: "Extended ER Features and Design Constraints"
subtitle: "Database Management Systems"
date: "2021-01-01"
---

## Specialization
It is a top-down design process, we designate subgroupings within an entity set that are distinctive from other entities in the set. These subgroupings become lower-level entity sets that have attributes or participate in relationships that do not apply to the higher-level entity set. Depicted by a triangle component labelled ISA (E.g. person “is a” customer). Attribute inheritance – a lower-level entity set inherits all the attributes and relationship participation of the higher-level entity set to which it is linked.

## Generalization 
It is a bottom-up design process. It combine a number of entity sets that share the same features into a higher-level entity set. Specialization and generalization are simple inversions of each other; they are represented in an E-R diagram in the same way. The terms specialization and generalization are used interchangeably. The ISA relationship also referred to as superclass - subclass relationship.

<img src="https://static.javatpoint.com/dbms/images/dbms-generalization.png" alt="Generalization" style="width: 300px; height: 350px;">



## Aggregation 
In aggregation, the relation between two entities is treated as a single entity. In aggregation, relationship with its corresponding entities is aggregated into a higher level entity.For example: Center entity offers the Course entity act as a single entity in the relationship which is in a relationship with another entity visitor. In the real world, if a visitor visits a coaching center then he will never enquiry about the Course only or just about the Center instead he will ask the enquiry about both.

<img src="https://static.javatpoint.com/dbms/images/dbms-aggregation.png" alt="Aggregation" style="width: 450px; height: 350px;">


## Design Constraints

##### Constraint 1
Constraint on which entities can be members of a given lower-level entity set. It may be condition defined e.g. all customers over 65 years are members of senior-citizen entity set; senior-citizen ISA person or user-defined .

##### Constraint 2
Constraint on whether or not entities may belong to more than one lower-level entity set within a single generalization. 
- Disjoint : an entity can belong to only one lower-level entity set. This is noted in E-R diagram by writing disjoint next to the ISA triangle 
- Overlapping : an entity can belong to more than one lower-level entity set 

##### Constraint 3
Completeness constraint - specifies whether or not an entity in the higher-level entity set must belong to at least one of the lower-level entity sets within a generalization. 
- Total : an entity must belong to one of the lower-level entity sets 
- Partial: an entity need not belong to one of the lower-level entity sets

