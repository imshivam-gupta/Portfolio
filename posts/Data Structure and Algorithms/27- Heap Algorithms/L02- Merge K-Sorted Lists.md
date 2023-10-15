---
title: "Merge K-Sorted Lists"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Using Auxiliary Array

- Create an auxiliary array of size n*k.
- Copy all the elements of all the k arrays into the auxiliary array.
- Sort the auxiliary array.
- Time Complexity: O(nklog(nk))
- Space Complexity: O(nk)

```cpp
Node* mergeKLists(vector<Node*> &listArray){

    int k = listArray.size();
    if (k == 0) return NULL;

    vector<int> helper;

    for (int i = 0; i < k; i++){
        Node* curNode = listArray[i];
        while (curNode!=NULL){
           helper.push_back(curNode->data);
           curNode =  curNode->next;
        }
    }

    sort(helper.begin(), helper.end());

    Node *head = NULL, *tail = NULL;

    for (int i = 0; i < helper.size(); i++){
        Node *newNode = new Node(helper[i]);
        if (head == NULL){
            head = newNode;
            tail = newNode;
        }
        else{
            tail->next = newNode;
            tail = newNode;
        }
    }

    return head;
}
```

## Using Priority Queue

- Create a priority queue of size k.
- Insert the first element of all the k arrays into the priority queue.
- Pop the top element from the priority queue and insert the next element of the array from which the element was popped.
- Time Complexity: O(nklogk)
- Space Complexity: O(k)

```cpp
class compare{
public:
    bool operator()(const Node *first, const Node *second){
        return (first->data > second->data);
    }
};

Node* mergeKLists(vector<Node*> &listArray){
    
    int k = listArray.size();
    if (k == 0) return NULL;

    priority_queue<Node*, vector<Node*>, compare> helperPQ;

    for (int i = 0; i < k; i++)
        if (listArray[i] != NULL)
            helperPQ.push(listArray[i]);
 

    Node *head = NULL, *tail = NULL;

    while (helperPQ.size() > 0){
        Node *minNode = helperPQ.top();
        helperPQ.pop();

        if (minNode->next != NULL){
            helperPQ.push(minNode->next);
            minNode->next = NULL;
        }

        if (head == NULL){
            head = minNode;
            tail = minNode;
        } else{
            tail->next = minNode;
            tail = tail->next;
        }
    }

    return head;
}
```