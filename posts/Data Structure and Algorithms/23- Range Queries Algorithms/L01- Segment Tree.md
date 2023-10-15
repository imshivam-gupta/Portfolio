---
title: "Segment Tree"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

A segment tree is a data structure used to effectively query and update ranges of array members. It’s typically implemented as a binary tree, with each node representing a segment or range of array elements.

- A segment tree is a binary tree with a leaf node for each element in the array.
- Each internal node represents a segment or a range of elements in the array.
- The root node represents the entire array.
- Each node stores information about the segment it represents, such as the sum or minimum of the elements in the segment.

![Segment Tree](https://media.geeksforgeeks.org/wp-content/uploads/20220802230109/Screenshot20220802at105939PM-660x302.jpg)

## Construction Algorithm

- The segment tree can be constructed recursively. The recursion starts with all the array elements in leaves of the segment tree.
- Each parent node is the sum of its children nodes.
- The time complexity of the construction is O(n). The space complexity is O(n) since we need to store the segment tree.

## Query Algorithm

- To query a sum in a given range, we start with the root node representing the entire array.
- If the range represented by a node is completely outside the query range, we return 0.
- If the range represented by a node is completely inside the query range, we return the value of the node.
- Otherwise, we recursively consider both children nodes, and return the sum of the values returned by the left and right child.

## Point Update Algorithm

- To update a value, we start with the root node representing the entire array.
- If the index of the element to be updated is outside the range represented by a node, we return the value of the node.
- Otherwise, we recursively update the children nodes, and return the sum of the values returned by the left and right child.


## Range Update Algorithm(Lazy Propagation)

- To update a range, we start with the root node representing the entire array.
- If the range represented by a node is completely outside the update range, we return the value of the node.
- If the range represented by a node is completely inside the update range, we update the node and mark its children for future update.
- Otherwise, we recursively update the children nodes, and return the sum of the values returned by the left and right child.

```cpp
class NumArray {
public:

    struct TreeNode{
        int start,end;
        TreeNode *left,*right;
        int sum;

        TreeNode(int start,int end) : start(start),end(end),left(nullptr),right(nullptr),sum(0){}
    };


    vector<int> arr;
    TreeNode* root;
    TreeNode* lazy; // added for lazy propagation

    
    void build(TreeNode* root,TreeNode* lazy,vector<int> &input){
        if(root->start==root->end){
            root->sum=input[root->start];
            return;
        }

        int mid = root->start + ((root->end-root->start)/2);
        root->left = new TreeNode(root->start,mid);
        root->right = new TreeNode(mid+1,root->end);

        lazy->left = new TreeNode(root->start,mid); // added for lazy propagation
        lazy->right = new TreeNode(mid+1,root->end); // added for lazy propagation

        
        build(root->left,lazy->left,input);
        build(root->right,lazy->right,input);

        root->sum = root->left->sum + root->right->sum;
    }


    int query(TreeNode* root,TreeNode* lazy,int l,int r){

       if(lazy->sum!=0){ // added for lazy propagation
           root->sum += (lazy->sum*(root->end-root->start+1));
           if(root->start!=root->end){
               lazy->left->sum += lazy->sum;
               lazy->right->sum += lazy->sum;
           }
           lazy->sum = 0;
         }


        if(root->end<l or root->start>r){
            return 0;
        }

        if(l<=root->start and root->end<=r){
            return root->sum;
        }

        int lsum = query(root->left,lazy->left,l,r);
        int rsum = query(root->right,lazy->right,l,r);
        return lsum+rsum;
    }

    void update(TreeNode* root,int ind,int val){
        if(root->start==root->end){
            root->sum=val;
            this->arr[ind] = val;
            return;
        }

        int mid = root->start + (root->end-root->start)/2;
        
        if(ind<=mid){
            update(root->left,ind,val);
        } else{
            update(root->right,ind,val);
        }

        root->sum = root->left->sum+root->right->sum;
    }

    void rangeUpdateLazy(TreeNode* root,TreeNode* lazy,int l,int r,int val){ // added for lazy propagation

        if(lazy->sum!=0){
            root->sum += (lazy->sum*(root->end-root->start+1));
            if(root->start!=root->end){
                lazy->left->sum += lazy->sum;
                lazy->right->sum += lazy->sum;
            }
            lazy->sum = 0;
        }

        if(root->end<l or root->start>r){
            return;
        }

        if(root->start>=l and root->end<=r){
            root->sum += (val*(root->end-root->start+1));
            if(root->start!=root->end){
                lazy->left->sum += val;
                lazy->right->sum += val;
            }
            return;
        }

        rangeUpdateLazy(root->left,lazy->left,l,r,val);
        rangeUpdateLazy(root->right,lazy->right,l,r,val);

        root->sum = root->left->sum+root->right->sum;
    }

    NumArray(vector<int>& nums) {
        this->arr = nums;
        this->root = new TreeNode(0,nums.size()-1);
        this->lazy = new TreeNode(0,nums.size()-1);  // added for lazy propagation
        build(root,lazy,nums);
    }
    
    void update(int index, int val) {
        update(root,index,val); 
    }
    
    int sumRange(int left, int right) {
        return query(root,lazy,left,right);
    }

    void updateRange(int l,int r,int val){ 
        rangeUpdateLazy(root,lazy,l,r,val); // added for lazy propagation
    }
};
```



### Complexity Analysis


#### Time Complexity

##### Build

- **Time Complexity:** O(N), where N is the number of nodes in the tree, and each node is visited once.

##### Query

- **Time Complexity:** O(logN), where N is the number of nodes in the tree, and each node is visited once.

##### Update

- **Time Complexity:** O(logN), where N is the number of nodes in the tree, and each node is visited once.

##### Range Update

- **Time Complexity:** O(logN), where N is the number of nodes in the tree, and each node is visited once.

#### Space Complexity

- **Space Complexity:** O(N), where N is the number of nodes in the tree, and each node is visited once.
