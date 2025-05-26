// O(n ^ 2) complexity
// function firstUniqueChar(str) {
//   let flag;
//   for (let i = 0; i < str.length; i++) {
//     flag = false;
//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] == str[j]) {
//         flag = true;
//         break;
//       }
//     }
//     if (!flag) {
//       return str[i];
//     }
//   }
//   return false;
// }

function firstUniqueChar(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return false;
}

console.log(firstUniqueChar("aabbcdeff"));
