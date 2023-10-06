[Boolean Parenthesization](https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1)

```cpp

int mod = 1003;
class Solution{
public:
    int countWays(int N, string S){
        vector<vector<vector<int>>> dp(N,vector<vector<int>>(N,vector<int>(2,0)));
        
        
        for(int g=0;g<N;g++){
            for(int si=0,ei=g;ei<N;si+=1,ei+=1){
                if(g==0){
                    char c = S[si];
                    dp[si][ei][0]=(c=='F');
                    dp[si][ei][1]=(c=='T');
                } else{
 
             int wt =0; int wf=0;
                    for(int k=si+1;k<=ei-1;k+=2){
                        
                        char opr = S[k];
   
                        int lT = dp[si][k-1][1];
                        int rT = dp[k+1][ei][1];
                        int lF = dp[si][k-1][0];
                        int rF = dp[k+1][ei][0];
                        
            if(opr=='&'){
                wt = (wt + (lT * rT) % mod) % mod;
                wf = (wf + (lF * rT) % mod + (lT * rF) % mod + (lF * rF) %
             mod) % mod;
            } else if(opr=='|'){
                 wt =  (wt  + (lF * rT) % mod + (lT * rF) % mod + (lT *
            rT) % mod) % mod;
                wf = (wf + (lF * rF) % mod) % mod;
            } else if(opr=='^'){
                 wt= (wt + (lF * rT) % mod + (lT * rF) % mod) % mod;
                wf = (wf+ (lF * rF) % mod + (lT * rT) % mod) % mod;
            }
            
            
                    }
                    
                    
                    dp[si][ei][1] = wt;
                    dp[si][ei][0] = wf;
                    
                    
                }
            }
        }
        
        return dp[0][N-1][1];
    }
};

```