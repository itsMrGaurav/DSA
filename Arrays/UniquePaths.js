// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

//Constraint
// 1 <= m, n <= 100

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = new Map();
  let curr;
  function uniquePathOfIdx(i, j) {
    if (i + 1 === n || j + 1 === m) return 1;
    curr = memo.get(`${i}-${j}`);
    if (!curr) {
      curr = uniquePathOfIdx(i, j + 1) + uniquePathOfIdx(i + 1, j);
      memo.set(`${i}-${j}`, curr);
    }
    return curr;
  }

  return uniquePathOfIdx(0, 0);
};
