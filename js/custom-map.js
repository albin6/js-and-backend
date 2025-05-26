function customMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

const result = customMap([1, 2, 3], (x) => x * 2);
console.log(result);
