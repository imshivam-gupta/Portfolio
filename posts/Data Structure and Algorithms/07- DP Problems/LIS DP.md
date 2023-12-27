---
title: "LIS DP"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Approach: We will see that we have to form longest subsequence. So we will try to form the longest subsequence till that point. Now we have either 2 options first if we just want length we can use binary search or segment tree to find the longest subsequence. But if we want to print the subsequence we have to use DP. In some problems we have to use segment tree like LIS 2. Below are the codes for LIS.

[Problem Link](https://leetcode.com/problems/longest-increasing-subsequence/)

## Brute Force - Memoization

##### Algorithm

- For each element in the array, we have two choices
- Either we can include the element in the LIS if it is greater than the previous element
- Or we can exclude the element from the LIS
- We will try both the choices for each element and return the maximum of the two


```cpp
class Solution {
public:

    vector<vector<int>> memo;

    int f(vector<int>& nums,int si,int pi){

        if(si>=nums.size()){ 
            return 0;
        }

        if(memo[si][pi+1]!=-1){ 
            return memo[si][pi+1];
        }

        int not_pick = f(nums,si+1,pi);
        int pick = -1e9;

        if(pi==-1 or nums[pi]<nums[si]){
            pick = f(nums,si+1,si)+1;
        }    
        
        return memo[si][pi+1]=max(pick,not_pick);
    }

    int lengthOfLIS(vector<int>& nums) {
        memo.resize(nums.size(),vector<int>(nums.size()+1,-1));
        return f(nums,0,-1);
    }
};
```
###### Complexity

- Time: O(n<sup>2</sup>)
- Space: O(n<sup>2</sup>)

<!-- Adding line  -->


## Bottom Up DP



```cpp
class Solution {
public:

    int lengthOfLIS(vector<int>& nums) {
        vector<vector<int>> memo(nums.size()+1,vector<int>(nums.size()+1,0));
        int n = nums.size();
        for(int i=n-1;i>=0;i--){
            for(int j=i-1;j>=-1;j--){
                
                int exclude = memo[i+1][j+1];
                int include = INT_MIN;
                
                if(j==-1 || nums[j]<nums[i]){
                    include = memo[i+1][i+1] + 1;
                }

                memo[i][j+1] = max(include,exclude);
            }
        }
       
        return memo[0][0];
    }
};
```


###### Complexity

- Time: O(n<sup>2</sup>)
- Space: O(n<sup>2</sup>)


## Bottom Up DP - Optimized


```cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n,1);

        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                if(nums[j]<nums[i]){
                    dp[i] = max(dp[i],1+dp[j]);
                }
            }
        }

        int ans = dp[0];
        for (int i = 1; i < n; i++) {
            ans = max(ans, dp[i]);
        }
        return ans;
    }
};
```

###### Complexity

- Time: O(n<sup>2</sup>)
- Space: O(n)


## Binary Search

###### Algorithm

- We will maintain a vector of elements which will be our LIS till now
- We will iterate over the array and for each element we will do the following
- If the element is greater than the last element of the LIS, we will push it in the LIS
- Else we will find the first element in the LIS which is greater than the current element and replace it with the current element
- In this way we will maintain a sorted vector of elements which will be our LIS till now
- The length of this vector will be our answer

> **Note:** This algorithm will not give us the LIS but it will give us the length of the LIS


```cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> ans;
        for(int x:nums){
            if(ans.empty() or ans.back()<x){
                ans.push_back(x);
            }
            else{
                int ind = lower_bound(ans.begin(),ans.end(),x)-ans.begin();
                ans[ind]=x;
            }
        }
        return ans.size();
    }
};
```

###### Complexity

- Time: O(nlogn)
- Space: O(n)


## Segment Tree

###### Algorithm

- First we will offset the array by adding 10000 to each element because the minimum element can be -10000 and we will avoid negative indices.
- We will maintain a segment tree of size 20001 which will store the length of the LIS till now for each element.
- For each element we will query the segment tree for the maximum length of LIS till now for all the elements less than the current element.
- Then we will update the segment tree for the current element with the length of LIS till now for the current element.
- In this way we will maintain the length of LIS till now for each element in the segment tree.

```cpp
const int maxN = 100000 + 1;

class Solution {
public:
    class SegmentTree {
        public:
        vector<int> seg;
        
        SegmentTree() {
            seg = vector<int>(maxN * 4 + 10, 0);
        }
        
        int query(int l, int r) {
            return query_util(0, 0, maxN - 1, l, r);   
        }
        
        int query_util(int i, int low, int high, int l, int r) {
            if(low >= l && high <= r)
                return seg[i];
            if(low > r || high < l)
                return INT_MIN;
            int mid = (low + high) / 2;
            int left = query_util(2 * i + 1, low, mid, l, r);
            int right = query_util(2 * i + 2, mid + 1, high, l, r);
            return max(left, right);
        }
        
        void update(int len, int ele) {
            update_util(0, 0, maxN - 1, ele, len);
        }
        
        void update_util(int i, int low, int high, int ele, int len) {
            if(high == low) {
                seg[i] = len;
                return;
            }
            int mid = (low + high) / 2;
            if(low <= ele && ele <= mid) {
                update_util(2 * i + 1, low, mid, ele, len);
            } else {
                update_util(2 * i + 2, mid + 1, high, ele, len);
            }
            seg[i] = max(seg[2 * i + 1], seg[2 * i + 2]);
        }
    };
    
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        SegmentTree seg;

        for(int i = 0; i < n; i++) nums[i] += 10001;
        for(auto it : nums) {
            int longestSequenceBefore = 1 + seg.query(0, it - 1);
            cout << longestSequenceBefore << " " << it << endl;
            seg.update(longestSequenceBefore, it);
        }

        return seg.query(0, maxN);
    }
};
```

###### Complexity

- Time: O(nlogn)
- Space: O(n)


## Problems based on Partition DP Pattern

#### Important Problems For Understanding

| Problem | Link | Difficulty |
|---|---|---|
| Length of LIS | [Link](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium |
| Length of LIS II | [Link](https://leetcode.com/problems/longest-increasing-subsequence-ii/) | Hard |
| Number of LIS | [Link](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | Medium |
| Maximum Sum Increasing Subsequence | [Link](https://leetcode.com/problems/maximum-sum-increasing-subsequence/) | Medium |
| Russian Doll Envelopes | [Link](https://leetcode.com/problems/russian-doll-envelopes/) | Hard |
| Maximum Height by Stacking Cuboids | [Link](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/) | Hard |


#### Other Problems

| Problem | Link | Difficulty |
|---|---|---|
| Delete Columns to Make Sorted III | [Link](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/) | Hard |
| Make Array Strictly Increasing | [Link](https://leetcode.com/problems/make-array-strictly-increasing/) | Hard |
| Minimum Number of Removals to Make Mountain Array | [Link](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/) | Hard |
| Longest String Chain | [Link](https://leetcode.com/problems/longest-string-chain/) | Medium |
| Largest Divisible Subset | [Link](https://leetcode.com/problems/largest-divisible-subset/) | Medium |

