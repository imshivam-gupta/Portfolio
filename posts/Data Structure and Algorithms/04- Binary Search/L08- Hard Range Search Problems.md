---
title: "Hard Range Search Problems"
subtitle: "What will this cover"
date: "2020-12-27"
---


## Kth Missing Positive Number- [Link](https://leetcode.com/problems/kth-missing-positive-number/)

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

## Aggressive Cows- [Link](https://www.codingninjas.com/studio/problems/aggressive-cows_1082559)

```cpp

```

## Book Allocation Problem- [Link](https://www.codingninjas.com/studio/problems/allocate-books_1090540)

```cpp

```

## Painter's Partition Problem- [Link](https://www.codingninjas.com/studio/problems/painter-s-partition-problem_1089557)

```cpp

```

## Median of 2 Sorted Arrays- [Link](https://leetcode.com/problems/median-of-two-sorted-arrays/)

```cpp
/*
        Time Complexity: O(32 * m * log(n))
        Space complexity: O(1)

        Where 'm' denotes the number of rows and 'n' denotes the number of columns of the matrix.

*/

int median(vector<vector<int>> &matrix, int m, int n)
{
    int maximum = INT_MIN;
    int minimum = INT_MAX;

    // To find the minimum and maximum in the matrix
    for (int i = 0; i < m; i++)
    {
        if (matrix[i][0] < minimum)
        {
            minimum = matrix[i][0];
        }
        if (matrix[i][n - 1] > maximum)
        {
            maximum = matrix[i][n - 1];
        }
    }

    // Count for the number to be the median
    int checkCount = (m * n + 1) / 2;

    // Binary search for the median
    while (minimum < maximum)
    {
        int mid = minimum + (maximum - minimum) / 2;
        int count = 0;
        int find = 0;

        for (int i = 0; i < m; ++i)
        {
            
            // Binary search for finding the count in each row
            find = upper_bound(matrix[i].begin(), matrix[i].end(), mid) - matrix[i].begin();

            // Increment count
            count = count + find;
        }

        if (count < checkCount)
        {
            minimum = mid + 1;
        }
        else
        {
            maximum = mid;
        }
    }

    // Finally return the answer
    return minimum;
}
```

## Kth Element of 2 Sorted Arrays- [Link](https://www.codingninjas.com/studio/problems/k-th-element-of-2-sorted-array_1164159)

```cpp

```