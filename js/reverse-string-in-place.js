function revereseStringInPlace(str) {
  let reversedStr = "";
  let subStr = "";
  for (let i = 0; i < str.length; i++) {
    subStr = "";
    let k = i;
    while (str[k] !== " " && k < str.length) {
      subStr += str[k++];
    }
    i = k;

    if (subStr.length) {
      for (let j = subStr.length - 1; j >= 0; j--) {
        reversedStr += subStr[j];
      }
      if (i < str.length) {
        reversedStr += " ";
      }
    }
  }
  return reversedStr;
}

const str = "I LOVE YOU";

console.log(revereseStringInPlace(str));
