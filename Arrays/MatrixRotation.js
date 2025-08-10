// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  function swap(r, c, i, j) {
    matrix[r][c] += matrix[i][j];
    matrix[i][j] = matrix[r][c] - matrix[i][j];
    matrix[r][c] -= matrix[i][j];
  }

  function rotation(r, c, n) {
    if (n === 1) return;
    if (n === 2) {
      swap(r, c, r + 1, c + 1);
      swap(r, c, r + 1, c);
      swap(r, c + 1, r + 1, c + 1);
      return;
    }

    for (let i = 0; i < n - 1; i++) {
      // swap rth row and (c+n)th col
      swap(r, c + i, r + i, c + n - 1);

      // swap cth col and rth row
      swap(r + n - 1 - i, c, r, c + i);

      // swap (r+n)th row and cth col
      swap(r + n - 1, c + n - 1 - i, r + n - 1 - i, c);
    }
  }

  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    rotation(i, i, matrix.length - 2 * i);
  }
};
