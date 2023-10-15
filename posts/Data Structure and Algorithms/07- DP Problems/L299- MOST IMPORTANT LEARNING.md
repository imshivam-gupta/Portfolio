class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& n) {
         if(n.size() < 3) return 0;
        int velocity = 0, dp = 0;
        for(int i = 2; i < n.length; i++) {
             if(n[i] - n[i-1] == n[i-1] - n[i-2]) {
                ++dp;
                velocity += dp;
            } else {
                dp = 0;
            }
        }
        return velocity;
    }
};

1 + 2 + 3 = 3 + 2 + 1 = 6 // think

