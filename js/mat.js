function findLongestSum(nums) {
  let index = 0;
  let currIndex = 0;
  let curr = nums[0];
  let sum = 0;
  while (curr) {
    sum += curr[index];
    if (index + 1 > nums[index].length || index + 1 > nums.length) {
      break;
    }
    if (curr[index + 1] > nums[currIndex + 1][index]) {
      curr = curr;
      index = index + 1;
    } else {
      curr = nums[currIndex + 1];
      currIndex = currIndex + 1;
    }
  }
  return sum;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findLongestSum(arr));
