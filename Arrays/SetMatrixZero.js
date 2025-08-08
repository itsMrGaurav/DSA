// Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:`

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length,
    col = matrix[0].length;
  let rowZero = false;

  // check if col and row should be zero
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          rowZero = true;
        } else {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  }

  // set row to zeroes
  for (let i = 1; i < row; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < col; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // set cols to zero
  for (let j = 1; j < col; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < row; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 1; i < row; i++) {
      matrix[i][0] = 0;
    }
  }

  if (rowZero) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }
};
