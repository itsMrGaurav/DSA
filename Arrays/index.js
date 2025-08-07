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
