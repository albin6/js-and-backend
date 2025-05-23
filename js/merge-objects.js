function mergeObjects(objOne, objTwo) {
  for (let key in objTwo) {
    if (objOne[key]) {
      objOne[key] = [objOne[key], objTwo[key]];
    } else {
      objOne[key] = objTwo[key];
    }
  }

  return objOne;
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
