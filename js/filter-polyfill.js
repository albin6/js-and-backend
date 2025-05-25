Array.prototype.myFilter = function (callback) {
  let filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    const curr = callback(this[i], i, this);
    if (curr) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

const nums = [1, 2, 3, 4, 5];
const filteredArray = nums.myFilter((item) => item % 2 !== 0);

console.log(filteredArray);
