function firstUniqueChar(str) {
  let flag;
  for (let i = 0; i < str.length; i++) {
    flag = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] == str[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return str[i];
    }
  }
  return false;
}

console.log(firstUniqueChar("aabbcdeff"));
