function removeDuplicates(arr) {
  let freq = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!freq.has(arr[i])) {
      freq.set(arr[i], 1);
    } else {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      i--;
      arr.length = arr.length - 1;
    }
  }
  return arr;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1]));
