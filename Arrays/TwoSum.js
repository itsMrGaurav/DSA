/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  function binarySearch(s, e, target) {
    if (s === e || e - s === 1) {
      if (nums[s] === target) {
        return s;
      }
      return -1;
    }

    const mid = Math.floor((s + e) / 2);
    if (nums[mid] === target) return mid;

    let ret = binarySearch(s, mid, target);
    if (ret !== -1) return ret;

    ret = binarySearch(mid, e, target);
    if (ret !== -1) return ret;
    return -1;
  }

  const ret = [-1, -1],
    l = nums.length;
  let rest = 0,
    idx = -1;
  for (let i = 0; i < l - 1; i++) {
    rest = target - nums[i];

    idx = binarySearch(i + 1, l, rest);
    if (idx !== -1) {
      ret[0] = i;
      ret[1] = idx;
      break;
    }
  }
  return ret;
};
