---
title: "Fenwick Tree"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

It is also known as Binary Indexed Tree (BIT). It is a data structure that can efficiently update elements and calculate prefix sums in a table of numbers. It is an alternative to Segment Trees and can be used in similar applications. It is memory efficient and easy to code as well.


Binary Indexed Tree is represented as an array. Let the array be BITree[]. Each node of the Binary Indexed Tree stores the sum of some elements of the input array. The size of the Binary Indexed Tree is equal to the size of the input array, denoted as n. In the code below, we use a size of n+1 for ease of implementation.


![Fenwick Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/BITSum.png)
<!-- <img
    src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/BITSum.png"
    alt=""
    style="width: 350px; height: 250px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/> -->


## Construction Algorithm

- Initialize a Fenwick Tree fenwick_tree with (N+1) elements, all initialized to 0.
- Loop through the input array arr from index 0 to N-1: For each element arr[i] at index i, call the update function to update fenwick_tree with the value arr[i] at index i.
- Return the constructed fenwick_tree.

## Update Algorithm

- Increment the index by 1 to match the 1-based indexing used in the Fenwick Tree.
- Calculate the difference (diff) between the new value value and the previous value of the element at the specified index in the original array (if applicable).
- Update the original array with the new value value at the specified index.
- Update the Fenwick Tree by adding the diff to the element at the specified index and its ancestors in the Fenwick Tree using bitwise operations. Specifically, repeat the following steps:
    - Increase the value of fenwick_tree[index] by diff.
    - Update the index by adding the least significant bit (LSB) to the current index, which can be found using the bitwise operation index += index & -index.
    - Continue this process until you reach the end of the Fenwick Tree.



## Query Algorithm

- Increment the index by 1 to match the 1-based indexing used in the Fenwick Tree.
- Initialize a variable prefix_sum to 0 to store the cumulative sum.
- Traverse the Fenwick Tree by iterating from the current index to 0 while decreasing the index by the least significant bit (LSB) at each step, which can be found using the bitwise operation index -= index & -index. For each step, add the value of fenwick_tree[index] to prefix_sum.
- After the loop, return prefix_sum, which will be the prefix sum up to the specified index.



```cpp
class NumArray {
public:

    vector<int> fenwick;
    vector<int> original;


    NumArray(vector<int>& nums) {
        original.resize(nums.size(),0);
        fenwick.resize(original.size()+1,0);
        for (int i=0;i<original.size();i++) 
            update(i, nums[i]); 
        
        for(int x:original) cout << x << " ";
        cout << endl;
    }
    
    void update(int index, int val) {
        int diff = val-original[index];
        original[index] = val;     
        index++;

        while(index<=original.size()){
            fenwick[index] += diff;
            index += index & (-index);
        }
    }
    
    int getPrefixSum(int index) {
        int sum = 0;
        index++;  

        while (index > 0) {
            sum += fenwick[index];
            index -= index & -index;
        }

        return sum;
    }
    
    int sumRange(int left, int right) {
        return getPrefixSum(right) - getPrefixSum(left - 1);
    }
};
```

### Complexity Analysis

#### Time Complexity

- **Construction**: O(NlogN), where N is the number of elements in the input array. Each update operation takes O(logN) time, and there are N update operations. Each query operation takes O(logN) time, and there are N query operations.
- **Update**: O(logN), where N is the number of elements in the input array. Each update operation takes O(logN) time.
- **Query**: O(logN), where N is the number of elements in the input array. Each query operation takes O(logN) time.

#### Space Complexity

- **Construction**: O(N), where N is the number of elements in the input array. The Fenwick Tree requires O(N) space.