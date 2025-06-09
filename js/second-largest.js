function findSecondLargest(nums) {
  let lar = Number.MIN_SAFE_INTEGER;
  let secLar = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > lar) {
      secLar = lar;
      lar = nums[i];
    } else if (nums[i] < lar && nums[i] > secLar) {
      secLar = nums[i];
    }
  }
  return secLar;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(arr));
