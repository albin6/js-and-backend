function debounce(callback, delay) {
  let timerId;
  return function () {
    let args = arguments;
    // let context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const log = debounce((msg) => {
  console.log("Logged:", msg);
}, 500);

log("Hello");
log("World");
log("World");
log("hi");
