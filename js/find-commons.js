const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function findCommon(nums1, nums2) {
  const map = new Map();
  const res = [];

  for (const num of nums1) {
    map.set(num, true);
  }

  for (const num of nums2) {
    if (map.has(num)) {
      res.push(num);
    }
  }

  return res;
}

console.log(findCommon(array1, array2));
