[Minimum Score of Triangulation](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)


```cpp
class Solution {
public:

    int solve(vector<int> val,int p1,int p2,vector<vector<int>> &dp){

        if(p1+1==p2) return 0;
        if(dp[p1][p2]!=-1) return dp[p1][p2];

        int ans = INT_MAX;
        for(int k=p1+1;k<p2;k++)
            ans = min(ans, val[p1]*val[p2]*val[k]+solve(val,p1,k,dp)+solve(val,k,p2,dp));
        
        return dp[p1][p2]=ans;
    }

    int minScoreTriangulation(vector<int>& values) {
        vector<vector<int>> dp( values.size(),vector<int>(values.size(),-1) );
        return solve(values,0,values.size()-1,dp);
    }
};
```