---
title: "Maximum Non-overlapping Bridges"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

[Problem Link]("https://leetcode.com/problems/unique-binary-search-trees/")

```cpp
class Solution {
public:
    int findCatalan(int n){
        
        long long dp[n+1],mod=1e9+7;
        
        dp[0]=dp[1]=1;
        
        for(int i=2;i<=n;i++){
            dp[i]=0;
            for(int j=0;j<i;j++){
                dp[i] = (dp[i]+(dp[j]*dp[i-j-1]));
            }
        }
        
        return dp[n];
    }
    int numTrees(int n) {
        return findCatalan(n);       
    }
};
```