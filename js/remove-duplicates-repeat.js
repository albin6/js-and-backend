function removeDuplicates(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums.length = nums.length - 1;
      i--;
    } else {
      map.set(nums[i], true);
    }
  }
}

const arr = [2, 3, 2, 4, 5, 3, 6, 9, 0, 0];
removeDuplicates(arr);
console.log(JSON.stringify(arr));
