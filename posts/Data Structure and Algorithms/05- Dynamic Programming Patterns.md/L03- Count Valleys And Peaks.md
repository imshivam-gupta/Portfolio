---
title: "Maximum Non-overlapping Bridges"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

[Problem Link]("https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/count-valleys-mountains-official/ojquestion")

```cpp
class Solution {
public:
    int solve(int n){
        
        long long dp[n+1];
        dp[0]=dp[1]=1;
        
        for(int i=2;i<=n;i++){
            int inside = i-1;
            int outside = i-inside;
            
            while(inside>=0){
                dp[i] += (dp[inside]*dp[outside]);
                inside--;
                outside++;
            }
        }
        
        return dp[n];
    }
};
```