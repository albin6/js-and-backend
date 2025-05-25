function removeDuplicateEven(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0 && map.has(nums[i])) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums.length = nums.length - 1;
      i--;
    } else if (!map.has(nums[i])) {
      map.set(nums[i], true);
    }
  }
  return nums;
}

const nums = [4, 3, 1, 1, 2, 4, 5, 2, 4, 1, 6, 6];

console.log(removeDuplicateEven(nums));
