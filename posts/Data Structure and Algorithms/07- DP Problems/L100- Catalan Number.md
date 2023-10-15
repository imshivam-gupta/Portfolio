---
title: "Catalan Number"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Catalan Number is a sequence of natural numbers that occurs that follows following recursive formula:

Catalan(n) = Catalan(0)Catalan(n-1) + Catalan(1)Catalan(n-2) + ... + Catalan(n-1)Catalan(0)
Catalan(0) = 1



## Code

```cpp
class Solution{
    public:

    int findCatalan(int n){
        
        long long dp[n+1],mod=1e9+7;

        dp[0]=1;
        
        for(int i=1;i<=n;i++){
            dp[i]=0;
            for(int j=0;j<i;j++) dp[i] = (dp[i]+(dp[j]*dp[i-1-j])%mod)%mod;
        }
        
        return dp[n];
    }
}

```

## Complexity Analysis

- Time Complexity: O(n^2)
- Space Complexity: O(n)