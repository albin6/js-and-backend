function findLongestCommonPrefix(words) {
  const curr = words[0];
  for (let i = 0; i < words[0].length; i++) {
    let prefix = curr.slice(0, i + 1);
    for (let j = 0; j < words.length; j++) {
      if (!words[j].startsWith(prefix)) {
        return prefix.slice(0, prefix.length - 1);
      }
    }
  }
}

const words = ["flower", "flow", "flight"];

console.log(findLongestCommonPrefix(words));
