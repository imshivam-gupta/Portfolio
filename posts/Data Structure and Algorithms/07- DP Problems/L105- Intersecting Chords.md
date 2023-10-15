---
title: "Intersecting Chords in Circle"     
subtitle: "Random Subtitle"
date: "2023-01-01"
---

```cpp
int findCatalan(int n){
        
        long long dp[n+1],mod=1e9+7;
        
        dp[0]=dp[1]=1;
        
        for(int i=2;i<=n;i++){
            dp[i]=0;
            for(int j=0;j<i;j++){
                dp[i] = (dp[i]+(dp[j]*dp[i-j-1])%mod)%mod;
            }
        }
        
        return dp[n];
    }
    
int Solution::chordCnt(int A) {
    return findCatalan(A);
}
```

## Complexity Analysis

- Time Complexity: O(n^2)
- Space Complexity: O(n)
