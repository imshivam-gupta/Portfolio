---
title: "Comparing Sorting Algorithms" 
subtitle: "What will this cover"
date: "2020-12-27"
---

| Algorithm | Average Time Complexity | Worst Time Complexity | Best Time Complexity | Space Complexity | Stable |
| --------- | ----------------------- | --------------------- | -------------------- | ---------------- | ------ |
| Bubble Sort   | O(n<sup>2</sup>)        | O(n<sup>2</sup>)      | O(n)                 | O(1)             | Yes    |
| Selection Sort | O(n<sup>2</sup>)        | O(n<sup>2</sup>)      | O(n<sup>2</sup>)     | O(1)             | No     |
| Insertion Sort | O(n<sup>2</sup>)        | O(n<sup>2</sup>)      | O(n)                 | O(1)             | Yes    |
| Merge Sort | O(nlogn)                | O(nlogn)              | O(nlogn)             | O(n)             | Yes    |
| Quick Sort    | O(nlogn)                | O(n<sup>2</sup>)      | O(nlogn)             | O(1)+O(logn)          | No     |
| Heap   Sort   | O(nlogn)                | O(nlogn)              | O(nlogn)             | O(1)+O(logn)     | No     |
| Counting Sort | O(n+m)                  | O(n+m)                | O(n+m)               | O(n+m)             | Yes    |
| Radix   Sort  | O(d(n+b)) | O(d(n+b)) | O(d(n+b))| O(n+b)  | Yes    |
| Bucket  Sort  | O(n)                  | O(n<sup>2</sup>)      | O(n+k)                 | O(n+k)           | Yes    |
| Shell  Sort   | O(nlogn)                | O(n<sup>2</sup>)      | O(nlogn)                 | O(1)             | No     |


## Important Points

- Unstable sorting algorithms do not guarantee that the relative order of elements with equal keys will remain the same after sorting. These are Selection Sort, Quick Sort, Heap Sort, Shell Sort.
- Linear sorting algorithms are Counting Sort, Radix Sort, Bucket Sort.
- Comparison based sorting algorithms are Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Shell Sort.
- In-place sorting algorithms are Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Heap Sort, Shell Sort.


