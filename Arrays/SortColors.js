/**
 Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
**/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var swap = (i, j) => {
    nums[i] += nums[j];
    nums[j] = nums[i] - nums[j];
    nums[i] -= nums[j];
  };

  let r = nums[0] === 0 ? 1 : 0,
    w = nums[0] === 1 ? 1 : 0,
    b = nums[0] === 2 ? 1 : 0;
  for (let i = 1; i < nums.length; i++) {
    nums[i] === 0 ? r++ : nums[i] === 1 ? w++ : b++;
    if (nums[i] < nums[i - 1]) {
      if (nums[i] === 0) {
        swap(i, i - b);
        swap(i - b, i - w - b);
      } else {
        swap(i, i - b);
      }
    }
  }
};
