---
title: "Binary Search in 2D Matrix"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Search a 2D Matrix- [Link](https://leetcode.com/problems/search-a-2d-matrix/)

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
        int n=matrix.size(), m=matrix[0].size();
        int si =0, ei = m*n-1;

        while(si<=ei){
            int mid = si + (ei-si)/2;
            int x= matrix[mid/m][mid%m];

            if(x==target) return true;
            else if(x>target) ei=mid-1;
            else si=mid+1;
        }

        return false;
    }
};
```


## Search a 2D Matrix II- [Link](https://leetcode.com/problems/search-a-2d-matrix-ii/)

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
        int n = matrix.size(), m=matrix[0].size();
        int col = m-1;
        int row = 0;

        while(row<n and col>=0){
            if(matrix[row][col]==target) return true;
            else if(matrix[row][col]>target) col--;
            else row++;
        }

        return false;
    }
};
```

## Row with max 1s- [Link](https://www.codingninjas.com/studio/problems/row-of-a-matrix-with-maximum-ones_982768)

```cpp
int rowWithMax1s(vector<vector<int>> &matrix, int n, int m) {
    int cnt_max = 0;
    int index = -1;

    for (int i = 0; i < n; i++) {
        int cnt_ones = m-( lower_bound(matrix[i].begin(),matrix[i].end(), 1)-matrix[i].begin());
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}
```

## Find Peak Element 2- [Link](https://leetcode.com/problems/find-a-peak-element-ii/)

```cpp
class Solution {
public:
    vector<int> findPeakGrid(vector<vector<int>>& mat) {
        int startCol=0,endCol=mat[0].size()-1;
        while(startCol<=endCol){
            int midCol=startCol+(endCol-startCol)/2;
            int maxRow=0;
            for(int i=0;i<mat.size();i++){
                if(mat[i][midCol]>mat[maxRow][midCol]){
                    maxRow=i;
                }
            }
            int currElement=mat[maxRow][midCol];
            int leftElement=midCol==0?-1:mat[maxRow][midCol-1];
            int rightElement=midCol==mat[0].size()-1?-1:mat[maxRow][midCol+1];
            if(currElement>leftElement and currElement>rightElement){
                return {maxRow,midCol};
            }else if(currElement<leftElement){
                endCol=midCol-1;
            }else{
                startCol=midCol+1;
            }
        }
        return {-1,-1};
    }
};
```

## Median in a row-wise sorted Matrix- [Link](https://www.codingninjas.com/studio/problems/median-of-a-row-wise-sorted-matrix_1115473)

```cpp

```





