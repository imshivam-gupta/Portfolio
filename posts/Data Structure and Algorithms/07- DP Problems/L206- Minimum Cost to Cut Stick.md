---
title: "Minimum Cost to Cut Stick"
subtitle: "Random Subtitle"
date: "2023-01-01"
---


## Algorithm

- Sort the cuts because we need to consider the cuts in order.
- Now we can choose any cut as the first cut and any cut as the last cut.
- We will see the segment of cuts by si and ei.
- For each segment we will try to cut at every possible position and find the minimum cost.
- We will use the cost of the segment to the left of the cut and the segment to the right of the cut.



## Code

```cpp
class Solution {
public:
    int minCost(int len, vector<int>& cuts) {
        sort(cuts.begin(), cuts.end());
        int n = cuts.size();
        vector<vector<int>> dp(n+1, vector<int>(n+1,0));

        for (int si = n - 1; si >= 0; si--) {
            for (int ei = si; ei <= n-1 ; ei++) {
                
                if(si==ei){
                    int right_end = (ei>=cuts.size()-1) ? len : cuts[ei+1];
                    int left_end = (si<=0) ? 0 : cuts[si-1];
                    dp[si][ei]=right_end - left_end;
                    continue;
                }
                dp[si][ei] = 1e9;
                for(int k=si;k<=ei;k++){
                    int right_end = (ei>=cuts.size()-1) ? len : cuts[ei+1];
                    int left_end = (si<=0) ? 0 : cuts[si-1];
                    int curr_cost = right_end - left_end + (k>0?dp[si][k-1]:0) + (k<(cuts.size()-1)?dp[k+1][ei]:0);
                    dp[si][ei] = min(dp[si][ei],curr_cost);
                }
            }
        }
        return dp[0][n - 1];
    }
};
```

## Complexity Analysis

- Time Complexity: O(n<sup>3</sup>)
- Space Complexity: O(n<sup>2</sup>)