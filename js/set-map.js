const arr = [1, 2, 3, 4, 4, 5, 6, 6];

const set = new Set(arr);

// for (const element of set) {
//   console.log(element);
// }

const map = new Map([
  ["name", "Albin"],
  ["age", 21],
]);

for (const key of map) {
  console.log(key);
}
