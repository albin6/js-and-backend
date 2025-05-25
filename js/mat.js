function findLongestSum(nums) {
  let index = 0;
  let currIndex = 0;
  let curr = nums[0];
  let sum = 0;
  while (curr) {
    sum += curr[index];
    if (index > nums[currIndex].length - 1 || currIndex > nums.length - 1) {
      break;
    }

    let stayInCurr =
      index === nums[currIndex].length - 1
        ? false
        : currIndex === nums.length - 1
        ? true
        : false;

    if (stayInCurr) {
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
