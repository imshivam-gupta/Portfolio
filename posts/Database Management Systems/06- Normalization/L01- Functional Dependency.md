---
title: "Functional Dependency"
subtitle: "Database Management Systems"
date: "2021-01-01"
---



The functional dependency is a relationship that exists between two attributes. It typically exists between the primary key and non-key attribute within a table. X->Y, The left side of FD (X) is known as a determinant, the right side of the production (Y) is known as a dependent.


For example:

Assume we have an employee table with attributes: Emp_Id, Emp_Name, Emp_Address. Here Emp_Id attribute can uniquely identify the Emp_Name attribute of employee table because if we know the Emp_Id, we can tell that employee name associated with it.

Functional dependency can be written as: &nbsp; Emp_Id → Emp_Name   


There are usually a variety of constraints (rules) on the data in the real world. 


For example, some of the constraints that are expected to hold in a university database are: • Students and instructors are uniquely identified by their ID. • Each student and instructor has only one name. • Each instructor and student is (primarily) associated with only one department. • Each department has only one value for its budget, and only one associated building.
 An instance of a relation that satisfies all such real-world constraints is called a legal instance of the relation;  A legal instance of a database is one where all the relation instances are legal instances  Constraints on the set of legal relations.  Require that the value for a certain set of attributes determines uniquely the value for another set of attributes.  A functional dependency is a generalization of the notion of a key.
Let R be a relation schema α ⊆ R and β ⊆ R  The functional dependency α → β holds on R if and only if for any legal relations r(R), whenever any two tuples t1 and t2 of r agree on the attributes α, they also agree on the attributes β. That is, t1[α] = t2 [α] ⇒ t1[β ] = t2 [β ]  Example: Consider r(A,B ) with the following instance of r. 

On this instance, B → A hold; A → B does NOT hold, 

Given a set F set of functional dependencies, there are certain other functional dependencies that are logically implied by F. • If A → B and B → C, then we can infer that A → C • etc.  The set of all functional dependencies logically implied by F is the closure of F.  We denote the closure of F by F

