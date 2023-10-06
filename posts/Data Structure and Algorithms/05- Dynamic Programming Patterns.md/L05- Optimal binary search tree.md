
[Optimal binary search tree](https://practice.geeksforgeeks.org/problems/optimal-binary-search-tree2214/1)

class Solution{
    public:
    
    int sum(int freq[], int i, int j){
        int s = 0;
        for (int k = i; k <= j; k++) s += freq[k];
        return s;
    }
    
    
    int solve(int frq[],int si,int ei){
        if(si>ei) return 0;
        if(si==ei) return frq[si];
        
        int mn = 1e9;
        int fsum = sum(freq, si, ei);
        
        for(int k=si;k<=ei;k++){
            int curr = solve(frq,si,k-1)+solve(frq,k+1,ei);
            if(curr<mn) mn = curr;
        }
        
        return mn+fsum;
    }
    int optimalSearchTree(int keys[], int freq[], int n){
        return solve(freq,0,n-1);
    }
};