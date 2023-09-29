---
title: "Binary Search Space Based"
subtitle: "What will this cover"
date: "2020-12-27"
---

# Problem Solving

In this section we will see how to apply binary search on the answer space. For example, if we have to find the square root of a number, we can apply binary search on the answer space which is the range of numbers from 1 to n. We can also apply binary search on the answer space when we have to find the maximum or minimum value of a function.

###### Square Root of an Integer- [Link](https://www.codingninjas.com/studio/problems/square-root-integral_893351)

```cpp
int floorSqrt(int n){
    long long int si =0, ei = n;
    long long int ans = 0;
    while(si<=ei){
        long long int mid = ((si+ei)>>1);
        long long int curr = mid*mid;
        if(curr==n) return mid;
        else if(curr<n){
            si=mid+1;
            ans = max(ans,mid);
        } else{
            ei=mid-1;
        }
    }

    return (int)ans;
}
```


###### Nth Root of an Integer- [Link](https://www.codingninjas.com/studio/problems/nth-root-of-m_1062679)

```cpp
int func(int mid, int n, int m) {
    long long ans = 1;
    for (int i = 1; i <= n; i++) {
        ans = ans * mid;
        if (ans > m) return 2;
    }
    if (ans == m) return 1;
    return 0;
}


int NthRoot(int m, int n) {
  long long int si =0, ei = n;
    long long int ans = 0;
    while(si<=ei){
        long long int mid = ((si+ei)>>1);
        
        int f = func(mid,m,n);

        if(f==1) return mid;
        else if(f==0) si=mid+1;
        else ei=mid-1;
    }

    return -1;
}
```

###### Koko Eating Bananas- [Link](https://leetcode.com/problems/koko-eating-bananas/)

```cpp
class Solution {
public:

    int fun(int mid,vector<int> &piles,int h){
        int temp = 0;

        for(int x:piles){
            temp+=(x/mid);
            if(x%mid!=0) temp++;
        }

        if(temp>h) return 1;
        else return 2;
    }

    int minEatingSpeed(vector<int>& piles, int h) {
        long long sum=0; int max_pile=INT_MIN;
        for(int pile:piles) {sum+=pile; max_pile=max(max_pile,pile);}
        int si = sum/h;

        if(si==0) return 1;
        int ei = max_pile;
        int ans = -1;

        while(si<=ei){
            int mid=si+ (ei-si)/2;
            int f = fun(mid,piles,h);
            
            if(f==1) si=mid+1;
            else{
                ans=mid;
                ei=mid-1;
            }
        }

        return ans;
    }
};
```

###### Minimum Days to Make m Bouquets- [Link](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)

```cpp
class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        
        int ei=-1;
        for(int x:bloomDay) ei=max(x,ei);
        
        int si=1;
        int ans=-1;
        
        while(si<=ei){
            int mid = si+(ei-si)/2;
            
            int temp=0;
            int count=0;

            for(int i=0;i<bloomDay.size();i++){
                if(bloomDay[i] <= mid){
                    count++;
                    if(count==k){
                        temp++;
                        count = 0;
                    }
                } else {
                    count =0;
                }
            }

            if(temp>=m){
                ans=mid;
                ei=mid-1;
            }

            else{
                si=mid+1;
            }
        }

        return ans; 
    }
};
```


###### Find the smallest Divisor- [Link](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)

```cpp
class Solution {
public:

     int findDivisionSum(vector<int>& nums, int& divisor) {
        int result = 0;
        for (int& num : nums) {
            result += ceil((1.0 * num) / divisor);
        }
        return result;
    }
    
    int smallestDivisor(vector<int>& nums, int threshold) {

        int ans = -1;
        int low = 1, high = *max_element(nums.begin(), nums.end());
        
        while (low <= high) {
            int mid = (low + high) / 2;
            int result = findDivisionSum(nums, mid);
   
            if (result <= threshold) {
                ans = mid;
                high = mid - 1;
            }

            else {
                low = mid + 1;
            }
        }
        
        return ans;
    }
};
```


###### Capacity to Ship Packages Within D Days- [Link](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

```cpp
class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        
        int sum=0;
        for(int wt:weights) sum+=wt;

        int si = sum/days;
        int ei = sum;
        int ans=-1;

        while(si<=ei){
            int mid = si+ (ei-si)/2;

            int curr_hold=0;
            int days_taken=0;
            for(int i=0;i<weights.size();i++){
                if(weights[i]>mid){
                    days_taken =1e9;
                    break;
                }
                if(curr_hold+weights[i]>mid){
                    days_taken++;
                    curr_hold=0;
                } 
                curr_hold+=weights[i];
            }
            if(curr_hold>0) days_taken++;

            cout << mid << " " << days_taken << endl;

            if(days_taken<=days){
                ans=mid;
                ei=mid-1;
            } else {
                si=mid+1;
            }
        }

        return ans;
    }
};
```


###### Kth Missing Positive Number- [Link](https://leetcode.com/problems/kth-missing-positive-number/)

```cpp
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int si = 0, ei = arr.size()-1;

        while(si<=ei){
            int mid = si + (ei-si)/2;
            int curr_miss = arr[mid]-mid-1;
            if(curr_miss>=k) ei=mid-1;
            else si=mid+1;
        }

        // return arr[ei]+k-arr[ei]+ei+1;
        // that is arr[ei]+more needed

        return ei+k+1;
    }
};
```

###### Aggressive Cows- [Link](https://www.codingninjas.com/studio/problems/aggressive-cows_1082559)

```cpp

```

###### Book Allocation Problem- [Link](https://www.codingninjas.com/studio/problems/allocate-books_1090540)

```cpp

```

###### Painter's Partition Problem- [Link](https://www.codingninjas.com/studio/problems/painter-s-partition-problem_1089557)

```cpp

```

###### Median of 2 Sorted Arrays- [Link](https://leetcode.com/problems/median-of-two-sorted-arrays/)

```cpp

```

###### Kth Element of 2 Sorted Arrays- [Link](https://www.codingninjas.com/studio/problems/k-th-element-of-2-sorted-array_1164159)

```cpp

```