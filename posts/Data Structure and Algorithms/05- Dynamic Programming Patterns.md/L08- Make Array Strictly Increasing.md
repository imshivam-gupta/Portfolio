---
title: "Maximum Bitonic Subsequence"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height. Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other). Note: You cannot rotate an envelope.

[Problem Link](https://leetcode.com/problems/russian-doll-envelopes/)

## Memoized


```cpp
class Solution {
public:

    int solve(vector<int>& arr1,vector<int>& arr2,int si,int prev,vector<unordered_map<int,int>> &dp){
        if(si==arr1.size()) return 0;
        if(dp[si].find(prev)!=dp[si].end())return dp[si][prev];

        int pick = 1e9, notpick = 1e9;
        if(arr1[si]>prev) notpick = solve(arr1,arr2,si+1,arr1[si],dp);
        
        int upper = upper_bound(arr2.begin(),arr2.end(),prev) - arr2.begin();
        if(upper!=arr2.size()) pick = 1 + solve(arr1,arr2,si+1,arr2[upper],dp);
        return dp[si][prev]= min(pick,notpick);
    }

    int makeArrayIncreasing(vector<int>& arr1, vector<int>& arr2) {
        vector<unordered_map<int,int>> dp(arr1.size());
        sort(arr2.begin(),arr2.end());
        int ans = solve(arr1,arr2,0,-1,dp);
        return (ans==1e9?-1:ans);
    }
};
```