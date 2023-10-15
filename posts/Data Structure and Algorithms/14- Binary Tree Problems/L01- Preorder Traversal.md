---
title: "Preorder Traversal in Binary Trees"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

## Recursive Approach

#### Algorithm

- Visit the root.
- Traverse the left subtree, i.e., call Preorder(left-subtree)
- Traverse the right subtree, i.e., call Preorder(right-subtree)


#### Implementation


```cpp
void dfs(TreeNode* root,vector<int>&ans){
    if(root==NULL) return;
    ans.push_back(root->val);
    dfs(root->left,ans);
    dfs(root->right,ans);
}

vector<int> preorderTraversal(TreeNode* root) {
    vector<int> ans;
    dfs(root,ans);
    return ans;   
}
```

#### Complexity Analysis

- **Time Complexity:** O(N), where N is the number of nodes in the tree, and each node is visited once.
- **Space Complexity:** O(N), where N is the number of nodes in the tree. This is because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed binary tree could be N. 


## Iterative Approach


#### Algorithm

- Create an empty stack nodeStack and push root node to stack.
- Do following while nodeStack is not empty.
    - Pop an item from stack and print it.
    - Push right child of popped item to stack
    - Push left child of popped item to stack

#### Implementation

```cpp
vector<int> preorderTraversal(TreeNode* root) {
    vector<int> answer;
    stack<TreeNode*> st;
    st.push(root);

    while (!st.empty()) {
        TreeNode* currNode = st.top();
        st.pop();
        if (currNode != nullptr) {
            answer.push_back(currNode -> val);
            st.push(currNode -> right);
            st.push(currNode -> left);
        }
    }
    
    return answer;
}
```

#### Complexity Analysis

- **Time Complexity:** O(N), where N is the number of nodes in the tree, and each node is visited once.
- **Space Complexity:** O(N), where N is the number of nodes in the tree. This is because the maximum amount of space utilized by the stack would be N since the height of a skewed binary tree could be N.



## Morris Traversal

#### Algorithm

- Initialize current as root
- While current is not NULL
    - If the current does not have left child
        - Add current’s value
        - Go to the right, i.e., current = current.right
    - Else
        - In current's left subtree, make current the right child of the rightmost node
        - Go to this left child, i.e., current = current.left

#### Implementation

```cpp
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> preorder;
        TreeNode* cur = root;
        
        while (cur != NULL) {
            if(cur->left==NULL) {
                preorder.push_back(cur->val);
                cur = cur -> right;
            } else {
                TreeNode* prev = cur -> left;
                while(prev->right!=NULL && prev->right!=cur) prev = prev -> right;

                if (prev -> right == NULL) {
                    prev->right=cur;
                    preorder.push_back(cur->val);
                    cur = cur -> left;
                } else {
                    prev -> right = NULL;
                    cur = cur -> right;
                }
            }
        }

        return preorder;
    }
};
```

#### Complexity Analysis

- **Time Complexity:** O(N), where N is the number of nodes in the tree, and each node is visited once.
- **Space Complexity:** O(1), no extra space is used.






&nbsp; &nbsp; &nbsp;

##### Taking Input


```cpp
#include<bits/stdc++.h>
using namespace std;

class TreeNode{
    public:
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val): val(val), left(nullptr), right(nullptr){}
};


void takeInput(vector<int>&arr,TreeNode*&root){
    queue<TreeNode*> q;
    int i=0;
    root = new TreeNode(arr[i++]);
    q.push(root);
    while(!q.empty() && i<arr.size()){
        TreeNode* curr = q.front();
        q.pop();
        if(arr[i]!=-1){
            curr->left = new TreeNode(arr[i]);
            q.push(curr->left);
        }
        i++;
        if(arr[i]!=-1){
            curr->right = new TreeNode(arr[i]);
            q.push(curr->right);
        }
        i++;
    }
}

int main(){
    vector<int> arr;
    int x;
    while(cin>>x) arr.push_back(x);
    
    TreeNode* root = nullptr;
    takeInput(arr,root);
}
```