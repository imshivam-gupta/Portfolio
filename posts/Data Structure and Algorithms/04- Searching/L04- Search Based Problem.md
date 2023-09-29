---
title: "Binary Search Algortihm"
subtitle: "What will this cover"
date: "2020-12-27"
---


# Problem Solving

We try to eliminate the part of the search space where the answer cannot be present and then search for the answer in the remaining search space. This is also the main idea behind binary search.

###### Search Insert Position - [Link](https://leetcode.com/problems/search-insert-position/)

```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        return lower_bound(nums.begin(),nums.end(),target)-nums.begin();
    }
};
```

###### Find First and Last Position of Element in Sorted Array- [Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int lb = lower_bound(nums.begin(),nums.end(),target)-nums.begin();
        int ub = upper_bound(nums.begin(),nums.end(),target)-nums.begin()-1;
        if(ub==-1) return {-1,-1};
        if(lb>nums.size() or nums[lb]!=target) lb=-1;
        if(ub>nums.size() or nums[ub]!=target) ub=-1;
        return {lb,ub};
    }
};
```

###### Count Occurrences of an Element in a Sorted Array - [Link](https://www.codingninjas.com/studio/problems/occurrence-of-x-in-a-sorted-array_630456)
```cpp
int count(vector<int>& arr, int n, int x) {
	return upper_bound(arr.begin(),arr.end(),x)-lower_bound(arr.begin(),arr.end(),x);
}
```

###### Search in Rotated Sorted Array - [Link](https://leetcode.com/problems/search-in-rotated-sorted-array/)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        // check which part is sorted
        int low =0, high=nums.size()-1;
        while(low<=high){
            int mid = ((low+high)>>1);

            if(nums[mid]==target) return mid;

            if(nums[low]<=nums[mid]){
                if(nums[low]<=target and target<=nums[mid]) high=mid-1;
                else low=mid+1;
            } else{
                if(nums[mid]<=target and target<=nums[high]) low=mid+1;
                else high=mid-1;
            }
        }

        return -1;
    }
};
```


###### Search in Rotated Sorted Array 2 - [Link](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

```cpp
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        // check which part is sorted
        int low =0, high=nums.size()-1;
        while(low<=high){
            int mid = ((low+high)>>1);

            if(nums[mid]==target) return true;
            if(nums[low]==nums[high] and nums[low]==nums[mid]){low++;high--; continue;}

            if(nums[low]<=nums[mid]){
                if(nums[low]<=target and target<=nums[mid]) high=mid-1;
                else low=mid+1;
            } else{
                if(nums[mid]<=target and target<=nums[high]) low=mid+1;
                else high=mid-1;
            }
        }

        return false;
    }
};
```

###### Find minimum in Rotated Sorted Array - [Link](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

```cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int low=0, high=nums.size()-1;
        int ans = INT_MAX;

        while(low<=high){
            int mid = low + ((high-low)>>1);

            if(nums[mid]>=nums[low]){
                ans=min(ans,nums[low]);
                low=mid+1;
            }

            else{
                ans=min(ans,nums[mid]);
                high=mid-1;
            }
        }
        return ans;
    }
};
```


###### Times the array has been rotated- [Link](https://www.codingninjas.com/studio/problems/rotation_7449070?leftPanelTab=1)

```cpp
int findKRotation(vector<int> &nums){
    int low=0, high=nums.size()-1;
    int ans = 1e9;
    int ans_ind = 0;

    while(low<=high){
        int mid = low + ((high-low)>>1);

        if(nums[mid]>=nums[low]){
            if(ans>nums[low]){
                ans_ind = low;
                ans = nums[low];
            }
            low=mid+1;
        }

        else{
            if(ans>nums[mid]){
                ans_ind = mid;
                ans = nums[mid];
            }
            high=mid-1;
        }
    }
    return ans_ind;
}
```

###### Single Element in a Sorted Array- [Link](https://leetcode.com/problems/single-element-in-a-sorted-array/description/)

```cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        if(nums.size() == 1){
            return nums[0];
        }

        if(nums[0] != nums[1]){
            return nums[0];
        }

        if(nums[nums.size() - 1] != nums[nums.size() - 2]){
            return nums[nums.size() - 1];
        }

        int low = 1,high = nums.size() - 2;
        while(low <= high){
            int mid = (low + high)/2;

            if(nums[mid] != nums[mid + 1] && nums[mid] != nums[mid-1]){
                return nums[mid];
            }

            int highest_of_mid=mid;
            
            if(nums[mid]==nums[mid+1]){
                highest_of_mid=mid+1;
            }

            int lowest_of_mid=mid;
            if(nums[mid]==nums[mid-1]){
                lowest_of_mid=mid-1;
            }

            if(highest_of_mid%2!=0){
                low=highest_of_mid+1;
            }
            else{
                high=lowest_of_mid-1;
            }
        }
        return -1;
    }
};
```

###### Find Peak Element - [Link](https://leetcode.com/problems/find-peak-element/)

```cpp
class Solution {
public:
    int findPeakElement(vector<int>& nums){
        int start = 0, end = nums.size()-1;
        if(start==end)                    return start;
        if(nums[start]>nums[start+1])     return start;
        if(nums[end]>nums[end-1])         return end;
        start++, end--;
        while(start<=end){
            int mid = start+(end-start)/2;
            if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1])
                return mid;
            else if(nums[mid-1]>nums[mid])
                end = mid-1;
            else if(nums[mid+1]>nums[mid])
                start = mid+1;
        }
        return -1;
    }
};
```


