// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  map.set(nums[0], 1);
  let maxV = nums[0],
    maxC = 0,
    lastC;
  for (let i = 1; i < nums.length; i++) {
    lastC = map.get(nums[i]);
    if (lastC === undefined) map.set(nums[i], 1);
    else {
      lastC += 1;
      map.set(nums[i], lastC);
      if (lastC > maxC) {
        maxV = nums[i];
        maxC = lastC;
      }
    }
  }
  return maxV;
};
