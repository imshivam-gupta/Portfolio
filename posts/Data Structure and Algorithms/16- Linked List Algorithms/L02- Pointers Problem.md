---
title: "Pointer Problem in Linked List"
subtitle: "Pointer Problem in Linked List"
date: "2023-09-12"
---

## Add two numbers

### Approach1 - Using 2 pointers


```cpp
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};


class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *p1 = l1, *p2=l2;
        ListNode* ret = new ListNode();
        ListNode* ans = ret;
        int carry =0;

        while(p1 or p2 or carry){
            int sum =0;

            if(p1){
                sum+=p1->val; p1=p1->next;
            } 

            if(p2){
                sum+=p2->val; p2=p2->next;
            }

            sum+=carry;
            carry = sum/10;
            ListNode* temp = new ListNode(sum%10);
            ans->next= temp;
            ans=ans->next;
        }

        return ret->next;
    }
};
```

### Approach2 - Using Recursion

```cpp
class Solution {
public:
    ListNode *sumOfNumbers(ListNode*l1, ListNode*l2, int carry){
        if(l1 == NULL && l2 == NULL && carry == 0) return NULL;
        int n1 = 0, n2 = 0, sum;
        if(l1 != NULL){
            n1 = l1->val;
            l1 = l1->next;
        }
        if(l2 != NULL){
            n2 = l2->val;
            l2 = l2->next;
        }
        sum = (n1+n2+carry)%10;
        carry = (n1+n2+carry)/10;
        
        ListNode *temp = new ListNode(sum);
        temp->next = sumOfNumbers(l1, l2, carry);
        return temp;

    }
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        return sumOfNumbers(l1, l2, 0);
    }
};
```

## Remove Nth Node From End of List

### Approach1 - Using 2 pointers

```cpp
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *p1 = head, *p2=head;
        
        int temp=n;
        while(temp--) p2=p2->next;
        if(!p2) return head->next;

        while(p2->next){
            p1=p1->next;
            p2=p2->next;
        }
        
        ListNode* tbd = p1->next;
        p1->next = p1->next->next;
        delete(tbd);
        return head;
    }
};
```


## Merge Two Sorted Lists

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* ans = new ListNode();
        ListNode* temp = ans;

        while(list1 and list2){
            if(list1->val<list2->val){
                temp->next = list1;
                list1 = list1->next;
            } else {
                temp->next = list2;
                list2=list2->next;
            }
            temp=temp->next;
        }

        while(list1){
            temp->next = list1;
            list1 = list1->next;
            temp=temp->next;
        }

        while(list2){
            temp->next = list2;
            list2 = list2->next;
            temp=temp->next;
        }

        return ans->next;

    }
};
```


## Merge k Sorted Lists

### Approach1 - Using Priority Queue

```cpp
struct comp {
    bool operator()(ListNode* a, ListNode* b) const {
        return a->val > b->val;
    }
};

class Solution {
public:

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode*,vector<ListNode*>,comp>minh;
        int n=lists.size();
        if(n==0) return NULL;
        
        for(int i=0;i<n;i++) if(lists[i]) minh.push(lists[i]);
        
        ListNode* head=NULL;
        ListNode* tail=NULL;

        while(!minh.empty()){
            ListNode *temp=minh.top();
            minh.pop();
            if(head==NULL){
                head=temp;
                tail=temp;
                if(tail->next) minh.push(tail->next);
            }
            else{
                tail->next=temp;
                tail=temp;
                if(tail->next) minh.push(tail->next);
            }
        }

        return head;
    }
};
```


## Swap Nodes in Pairs

### Approach1 - Using 2 pointers

```cpp
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {

        if (head == NULL || head->next == NULL)  return head;

        ListNode* node = new ListNode(-1);
        ListNode* curr = head, *pre = node;

        while(curr  and curr->next) {
            pre->next = curr->next;
            curr->next = curr->next->next;
            pre->next->next = curr;
            curr = curr->next;
            pre = pre->next->next;
            
        }

        return node->next;
    }
};
```


## Reverse Nodes in k-Group

### Approach1 - Using 2 pointers

```cpp
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        dummy -> next = head;
        int len = length(head);
        for (int i = 0; i < len / k; i++) {
            for (int j = 1; j < k; j++) {
                ListNode* temp = pre -> next;
                pre -> next = head -> next;
                head -> next = head -> next -> next;
                pre -> next -> next = temp;
            }
            pre = head;
            head = head -> next;
        }
        return dummy -> next;
    }
    
    private:
    ListNode *dummy = new ListNode(0), *pre = dummy;
    int length(ListNode* head) {
        int len = 0;
        while (head) {
            len++;
            head = head -> next;
        }
        return len;
    }
};
```

## Rotate List

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    
    int lenll(ListNode* h){
        int a = 0;
        while(h) {a++; h=h->next;}
        return a;
    }


    ListNode* rotateRight(ListNode* head, int k) {

        if(head==NULL) return NULL;

        int len = lenll(head);
        k=k%len;

        ListNode *tmp =head, *last_node;

        for(int i=1;i<len-k;i++){
            tmp=tmp->next;
        }

        last_node = tmp;

        while(tmp->next!=NULL) tmp=tmp->next;
        tmp->next = head;

        ListNode* ret_node = last_node->next;
        last_node->next=NULL;
        
        return ret_node;
    }
};
```


## Remove Duplicates from Sorted List II

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(head == NULL || head->next == NULL) return head;
        ListNode* dummy = new ListNode(0);
        ListNode* prev = dummy;
        dummy->next=head;
        ListNode* curr = head;
        ListNode* after = head->next;

        while(curr!=NULL){

            if(after!=NULL and curr->val == after->val){
                while(after!=NULL and curr->val==after->val) after=after->next;
                prev->next = after;
            } else {
                prev=curr;
            }

            curr=after;
            if(after) after = after->next;
        }

        return dummy->next; 
    }
};
```


## Remove Duplicates from Sorted List

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {

        if(head==NULL || head->next==NULL) return head;
        
        ListNode* prev=head;
        ListNode* curr=head->next;

        while(curr!=NULL){

            if(prev->val==curr->val){
                while(curr!=NULL && curr->val==prev->val) curr=curr->next;
                prev->next=curr;
            }
            else{
                prev=curr;
                curr=curr->next;
            }
        }

        return head;
    }
};
```

