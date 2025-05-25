Array.prototype.myReduce = function (callback, initialValue) {
  let sum = initialValue;

  for (let i = 0; i < this.length; i++) {
    sum = callback(sum, this[i]);
  }

  return sum;
};

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr) => acc + curr, 0);

console.log("sum using my reduce polyfill =>", sum);
