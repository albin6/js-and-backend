function removeContinuousOdd(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      let j = 1;
      while (nums[j + i] % 2 !== 0 && j + i < nums.length) {
        j++;
      }

      if (j > 1) {
        nums.splice(i, j);
      }
    }
  }
  return nums;
}

const arr = [2, 3, 5, 7, 4, 7, 6, 9, 11, 13, 8, 10, 1];

console.log(removeContinuousOdd(arr));
