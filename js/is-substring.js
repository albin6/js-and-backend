function isSubString(str, substr) {
  for (let i = 0; i < str.length; i++) {
    let cutStr = str.slice(i);
    if (cutStr.startsWith(substr)) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

const str = "hello world",
  substr = "world";

console.log(isSubString(str, substr));
