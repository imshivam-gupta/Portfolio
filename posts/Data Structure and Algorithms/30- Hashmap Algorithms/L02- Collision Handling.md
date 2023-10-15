---
title: "Collision Handling"
subtitle: "Hashmap Algorithms"
date: "2023-10-03"
---


The hashing process generates a small number for a big key, so there is a possibility that two keys could produce the same value. The situation where the newly inserted key maps to an already occupied, and it must be handled using some collision handling technology

![Collision](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220706102035/Collision-in-Hashing.png)


There are two ways to handle collisions:

### Separate Chaining 

It is also called Open Hashing. The linked list data structure is used to implement this technique. So what happens is, when multiple elements are hashed into the same slot index, then these elements are inserted into a singly-linked list which is known as a chain. 

Example: Let us consider a simple hash function as “key mod 7” and a sequence of keys as 50, 700, 76, 85, 92, 73, 101


![Example](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/07/hashChaining1.png)

###### Data Structures For Storing Chains: 

**Linked lists**
- Search: O(l) where l = length of linked list
- Delete: O(l)
- Insert: O(l)
- Not cache friendly

**Dynamic Sized Arrays ( Vectors in C++, ArrayList in Java, list in Python)**
- Search: O(l) where l = length of array
- Delete: O(l)
- Insert: O(l)
- Cache friendly


**Self Balancing BST ( AVL Trees, Red-Black Trees)**
- Search: O(log(l)) where l = length of linked list
- Delete: O(log(l))
- Insert: O(l)
- Not cache friendly


###### Advantages:
- Simple to implement. 
- Hash table never fills up, we can always add more elements to the chain. 
- Less sensitive to the hash function or load factors. 
- It is mostly used when it is unknown how many and how frequently keys may be inserted or deleted. 

###### Disadvantages: 
- The cache performance of chaining is not good as keys are stored using a linked list. Open addressing provides better cache performance as everything is stored in the same table. 
- Wastage of Space (Some Parts of the hash table are never used) 
- If the chain becomes long, then search time can become O(n) in the worst case
- Uses extra space for links

###### Performance of Separate Chaining:

- m = Number of slots in hash table
- n = Number of keys to be inserted in hash table
- Load factor α = n/m
- Expected time to search = O(1 + α)
- Expected time to delete = O(1 + α)
- Time to insert = O(1)
- Time complexity of search insert and delete is O(1) if  α is O(1)


## Open Addressing

It is also called Closed Hashing. In Open Addressing, the hash table alone stores all of its elements. The size of the table should always be greater than or equal to the total number of keys at all times ( we can also increase the size of the table by copying the old data that is already existing whenever it is needed ). This mechanism is referred to as Closed Hashing. The formation and consideration of the whole process is probing.

Load Factor α = n/m, where n is the number of keys and m is the number of slots in the hash table. We need to make sure that the load factor is always less than 1 (α<1).

**Operations:**

- Insert(k): Keep probing until an empty slot is found. Once an empty slot is found, insert k. 
- Search(k): Keep probing until the slot’s key doesn’t become equal to k or an empty slot is reached. 
- Delete(k): If we simply delete a key, then the search may fail. So slots of deleted keys are marked specially as “deleted”. The insert can insert an item in a deleted slot, but the search doesn’t stop at a deleted slot. 

### Types of Probing:

###### Linear Probing:

In linear probing, the hash table undergoes clear and neat examination, starting from the hash's initial or beginning point. If the slot that is obtained after the calculation is already occupied, then we should look for a different one. 

The function that is responsible for performing rehashing is 

> key = rehash(n+1)%table-size 

The space between the two probes or positions is generally 1. It is one of the best techniques which has the best cache performance. Difficulties faced with Linear Probing:

- Primary Clustering: Primary clustering is one of the major issues that are caused with the linear probing technique. Many elements that are consecutive to each other generally form clusters or a group of scattering, which in turn makes the hash table more difficult to find an empty slot or search for an element.
- Secondary Clustering: Secondary clustering is not as severe as primary clustering, and the elements or records that must be placed within the same location are only allowed to share a collision chain which is also known as a probe sequence, if they begin at the same location.
- Clustering is the only problem in Linear probing. If clustering can be reduced within this mechanism, then this can be considered one of the best Collision resolution techniques.


###### Quadratic Probing: 

In Quadratic Probing, the intervals between the key positions is increased when compared to linear probing as the hash function is mostly different. The issue that is occurred due to the clustering in the above technique can be easily solved by using the quadratic probing technique. This technique is also known as mid-square method. When the iteration that is currently running is " i ", then the i^2th position is considered as the key position for that respective key. Other slots of positions are checked only when the key position that we are trying for is already occupied. This is the most efficient and effective method for a hash table which possesses closed properties. It has an average performance of cache and a subtle problem with clustering.

Difficulties faced with Quadratic Probing:

It deals with secondary clustering, and sometimes, two keys have same prob sequence whenever they possess the same key position.

###### Double hashing:

In this resolution technique, another hash function is used, which is created especially for the Double hashing mechanism. In this technique, the clustering that is formed between the keys is handled efficiently and is further reduced. The increment of the key positions is made out of the function that will be used in this mechanism. With that function, the key positions are calculated with their respective keys and are placed in the positions accordingly. The function is then multiplied with the variable " i ", and then the modulo operation is performed.

Difficulties in Double hashing:

Compared to other techniques, double hashing possesses poor cache performance but does not have any clustering issues. The time required for the completion of the entire process is more as there are two hash functions that are supposed to be performed. So, this causes poor cache performance. Other than this, there is no problem with Double hashing.