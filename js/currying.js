function one(a) {
  return function two(b) {
    return function three(c) {
      return a * b + c;
    };
  };
}

const x = one(10);
const y = x(5);
console.log(y(2));
