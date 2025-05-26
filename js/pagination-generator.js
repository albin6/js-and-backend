function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

const data = [1, 2, 3, 4, 5, 6, 7];
const pages = paginate(data, 3);

let result = pages.next();

while (!result.done) {
  console.log(result.value);
  result = pages.next();
}
