---
title: "Delete Columns to Make Sorted III"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

You are given an array of n strings strs, all of the same length.
We may choose any deletion indices, and we delete all the characters in those indices for each string. Suppose we chose a set of deletion indices answer such that after deletions, the final array has every string (row) in lexicographic order. 


[Problem Link](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/description/)

## Bottom Up DP


```cpp
class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        int n =strs.size(), m =strs[0].size();
        vector<int> dp(m,1);


        
        int ans = 0;
        for(int i=0;i<m;i++){
            for(int j=i-1;j>=0;j--){
                bool check =true;
                for(int k=0;k<n;k++){
                    if(strs[k][j]>strs[k][i]) {check = false; break;}
                }
                if(check) dp[i]=max(dp[i],1+dp[j]);
            }
            ans = max(ans,dp[i]);
        }
        
        return m-ans;
    }
};
```