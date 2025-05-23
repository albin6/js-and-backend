const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200);
  }, 2000);
});

p1.then((data) => console.log(data));
