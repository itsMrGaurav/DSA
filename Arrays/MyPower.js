// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0;
  if (x === 1 || n === 0) return 1;
  const X = n > 0 ? x : 1 / x,
    N = n > 0 ? n : -n;
  let half, ret;
  function squareIt(N) {
    if (N === 1) {
      ret = X;
    } else {
      half = N / 2;
      if (half === Math.floor(half)) {
        ret = squareIt(half);
        ret *= ret;
      } else {
        ret = squareIt(Math.floor(half));
        ret = X * ret * ret;
      }
    }
    return ret;
  }

  squareIt(N);
  return ret;
};
