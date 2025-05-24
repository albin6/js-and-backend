function countSubStringOccurence(str, substr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let cutStr = str.slice(i);
    if (!cutStr.startsWith(substr)) {
      continue;
    } else {
      count++;
    }
  }
  return count;
}

const str = "banana",
  substr = "an";

console.log(countSubStringOccurence(str, substr));
