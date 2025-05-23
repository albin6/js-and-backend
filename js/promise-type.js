const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("promise resolved");
  } else {
    reject("promise rejected");
  }
});

promise
  .then((data) => console.log(`promise data : ${data}`))
  .catch((err) => console.error(err));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 1500);
});

// const promises = await Promise.all([p1, p2, p3]); // wait for all promises to resolve, fails if any rejected
// const promises = await Promise.any([p1, p2, p3]); // return first resolved promise, aggregate error if all fails
// const promises = await Promise.allSettled([p1, p2, p3]); // wait for all to get settled either resolve or reject
// const promises = await Promise.race([p1, p2, p3]); //return the result of first settled promise

// console.log(`promise settled result : ${promises}`);
