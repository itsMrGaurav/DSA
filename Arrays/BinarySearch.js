function binarySearch(s, e, target) {
  if (s === e || e - s === 1) {
    if (nums[s] === target) {
      fdx = s;
      return;
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
