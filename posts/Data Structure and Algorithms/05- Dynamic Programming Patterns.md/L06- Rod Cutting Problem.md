
[Rod Cutting Problem](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)

class Solution {
public:
    int minCost(int n, vector<int>& cuts) {
        
        int c = cuts.size();
        cuts.insert(cuts.begin(),0);
        cuts.push_back(n);
        sort(cuts.begin(),cuts.end());

        vector<vector<int>> dp(c+2,vector<int>(c+2,0));
        
        for(int i=c;i>=1;i--){
            for(int j=1;j<=c;j++){
                if(i>j) continue;

                int mini = INT_MAX;
    
                for(int ind=i; ind<=j; ind++){
                    int ans = cuts[j+1] - cuts[i-1] + dp[i][ind-1] + dp[ind+1][j];
                    mini = min(mini, ans);
                }
    
                dp[i][j] = mini;
            }
        }
        
        return dp[1][c];
    }
}; 