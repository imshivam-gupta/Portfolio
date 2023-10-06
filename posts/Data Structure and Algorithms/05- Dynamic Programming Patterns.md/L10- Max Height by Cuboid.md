---
title: "Maximum Height by Stacking Cuboids"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

Given n cuboids where the dimensions of the ith cuboid is cuboids[i] = [widthi, lengthi, heighti] (0-indexed). Choose a subset of cuboids and place them on each other. You can place cuboid i on cuboid j if widthi <= widthj and lengthi <= lengthj and heighti <= heightj. You can rearrange any cuboid's dimensions by rotating it to put it on another cuboid. Return the maximum height of the stacked cuboids.

[Problem Link](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/description/)

## Bottom Up DP


```cpp
class Solution {
public:

    int lis(vector<vector<int>>& vec){
        int n = vec.size();
        vector<int> dp(n,0);

        for(int i=0;i<n;i++) dp[i]=vec[i][2];

        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                if(vec[i][0]>=vec[j][0] and vec[i][1]>=vec[j][1] and vec[i][2]>=vec[j][2])
                    dp[i]=max(dp[i],vec[i][2]+dp[j]);
            }
        }

        int ans = -1e9;
        for(int x:dp) ans=max(ans,x);

        return ans;
    }
    
    int maxHeight(vector<vector<int>>& cuboids) {
        for(auto &x:cuboids){
            sort(x.begin(),x.end());
        }
        sort(cuboids.begin(),cuboids.end());
        return lis(cuboids);
    }
};
```