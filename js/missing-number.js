function findMissingNumber(nums) {
  const missingNumbers = [];
  let counter = nums[0];
  for (let i = 0; i < nums.length; ) {
    if (nums[i] == counter) {
      i++;
    } else {
      missingNumbers.push(counter);
    }
    counter++;
  }
  return missingNumbers;
}

let arr = [1, 3, 7, 9, 10];
console.log(findMissingNumber(arr));
