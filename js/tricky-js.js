// This code demonstrates a simple asynchronous function that returns a value.
// The function is called and its result is logged to the console.
async function test() {
  return 1;
}

test().then(console.log);

// This code demonstrates the order of execution in JavaScript's event loop.
// It shows how synchronous code runs first, followed by microtasks (like promises),
// and then macrotasks (like setTimeout).
// The output will be "start", "end", "promise", "timeout".
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

// This code demonstrates the use of async/await in JavaScript.
// It shows how asynchronous functions can be used to handle asynchronous operations.
// The function `foo` calls `bar`, which is also an asynchronous function.
// The output will be "foo", "bar", "baz", "end".
// Note: The order of execution is important here, as `await` pauses the execution of `foo` until `bar` resolves.
async function foo() {
  console.log("foo");
  await bar();
  console.log("baz");
}

async function bar() {
  console.log("bar");
}

foo();
console.log("end");

// This code demonstrates the behavior of promises in JavaScript.
// It shows how a promise can be resolved and rejected, but only the first resolution is used.
// The second rejection is ignored because the promise has already been resolved.
// The promise will log "Success" to the console.
// Note: The second reject will not be executed because the promise is already resolved.
let p = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Error");
});

p.then((res) => console.log(res)).catch((err) => console.log(err));

// This code demonstrates the behavior of `null` in JavaScript.
// It shows that `null` is of type "object" and that it is not an instance of `Object`.
console.log(typeof null);
console.log(null instanceof Object);

// This code demonstrates the behavior of `undefined` in JavaScript.
// It shows that `undefined` is of type "undefined" and that it is not an instance of `Object`.
console.log(typeof undefined);
console.log(undefined instanceof Object);

// This code demonstrates how JavaScript handles object keys.
// It shows that when objects are used as keys in another object, they are converted to strings.
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
console.log(a[c]); // 456

// This code demonstrates the behavior of `NaN` in JavaScript.
// It shows that `NaN` is not equal to itself, and that it is of type "number".
console.log(NaN === NaN); // false
console.log(typeof NaN); // "number"
