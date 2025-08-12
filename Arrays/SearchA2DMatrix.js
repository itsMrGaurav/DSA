// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length,
    m = matrix[0].length;

  function binarySearch(s, e) {
    let i, j;
    if (s === e || e - s === 1) {
      (i = Math.floor(s / m)), (j = s - Math.floor(s / m) * n);
      if (matrix[i][j] === target) {
        return true;
      }
      return false;
    }

    const mid = Math.floor((s + e) / 2);
    (i = Math.floor(mid / m)), (j = mid - Math.floor(mid / m) * m);
    if (matrix[i][j] === target) return true;

    if (binarySearch(s, mid)) return true;
    if (binarySearch(mid, e)) return true;

    return false;
  }

  return binarySearch(0, n * m);
};
