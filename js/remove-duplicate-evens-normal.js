function removeDuplicateEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == curr && i !== j) {
        for (let k = j; k < nums.length - 1; k++) {
          nums[k] = nums[k + 1];
        }
        nums.length = nums.length - 1;
        i--;
      }
    }
  }
  return nums;
}

const nums = [4, 3, 1, 1, 2, 4, 5, 2, 4, 1, 6, 6];

console.log(removeDuplicateEven(nums));
