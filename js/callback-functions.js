function sum(num1, num2) {
  return num1 + num2;
}

function main(cb) {
  let a = 10;
  let b = 20;
  const sum = cb(a, b);
  console.log(sum);
}

main(sum);
