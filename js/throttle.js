function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    callback(...args);
  };
}

function logMessage(msg) {
  console.log(msg);
}

const throttledLog = throttle(logMessage, 2000);

throttledLog("hello");
throttledLog("hi");
throttledLog("how are you");

setTimeout(() => {
  throttledLog("delayed");
}, 2000);
