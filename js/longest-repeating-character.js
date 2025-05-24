function findLongestRepeatingCharacters(str) {
  let max = Number.MIN_SAFE_INTEGER;
  let char;
  for (let i = 0; i < str.length; i++) {
    let j = 1;
    while (str[i + j] === str[i]) {
      j++;
    }
    if (j > max) {
      max = j;
      char = str[i];
    }
  }
  return char;
}

const str = "etrrrrtutraaaaa"; // "aaaaa"

console.log(findLongestRepeatingCharacters(str));
