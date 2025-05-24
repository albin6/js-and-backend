function step1(callback) {
  setTimeout(() => {
    console.log("step one");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("step two");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("step three");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("completed");
    });
  });
});

const p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise one");
    }, 1000);
  });
};

const p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise two");
    }, 1000);
  });
};

const p3 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise three");
    }, 1000);
  });
};

p1()
  .then(p2)
  .then(p3)
  .catch((err) => console.log(err));
