---
title: "Unique BST"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Unique BST Problem Can be solved using Catalan Number. It is because for example we have 3 nodes we can form BST in following ways:

- Keeping root at 0 and no nodes in left but 2 nodes in right: f(0)*f(2)
- Keeping root at 1 and 1 node in left and 1 node in right: f(1)*f(1)
- Keeping root at 2 and 2 nodes in left and no nodes in right: f(2)*f(0)

So, total number of ways = f(0)*f(2) + f(1)*f(1) + f(2)*f(0) = 5

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


## Complexity Analysis

- Time Complexity: O(n^2)
- Space Complexity: O(n)

