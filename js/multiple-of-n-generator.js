function* generateMultipleOfNumber(n) {
  for (let i = 100; i > 0; i--) {
    if (i % n == 0) {
      yield i;
    }
  }
}

const gen = generateMultipleOfNumber(9);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
