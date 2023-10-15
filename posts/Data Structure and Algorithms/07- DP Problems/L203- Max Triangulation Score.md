---
title: "Max Triangulation Score"
subtitle: "Random Subtitle"         
date: "2023-01-01"
---

```cpp
class Solution {
public:

    int minScoreTriangulation(vector<int>& values) {
        int n = values.size();
        vector<vector<int>> dp(n,vector<int>(n,0));
        
        for(int si=n-1;si>=0;si--){
            for(int ei=si+2;ei<n;ei++){
                dp[si][ei] = 1e9;
                for(int k=si+1;k<ei;k++){
                    dp[si][ei] = min(dp[si][ei], values[si]*values[ei]*values[k]+dp[si][k]+dp[k][ei]);
                }
            }
        }

        return dp[0][n-1];
    }
};
```

## Complexity Analysis

- Time Complexity: O(n<sup>3</sup>)
- Space Complexity: O(n<sup>2</sup>)

