function removeEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      i--;
      nums.length = nums.length - 1;
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6];
removeEven(arr);
console.log(arr);
