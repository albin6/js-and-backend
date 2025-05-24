function findSum(arr, i = 0) {
  if (i > arr.length - 1) {
    return 0;
  }
  return arr[i].af + arr[i].l + findSum(arr, i + 1);
}

const ab = [
  { af: 3, l: 3 },
  { af: 3, l: 3 },
  { af: 3, l: 33 },
  { af: 3, l: 3 },
];

console.log(findSum(ab));
