function averageOfDuplicates(nums) {
  const map = new Map();
  let sum = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      sum += nums[i];
      count++;
    } else {
      map.set(nums[i], true);
    }
  }
  console.log(sum, count)
  return (sum / count).toFixed(2);
}

const arr = [2, 3, 2, 4, 5, 3, 6, 9, 0, 0];
console.log(averageOfDuplicates(arr));
