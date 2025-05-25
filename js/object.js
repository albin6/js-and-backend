const users = {};

Object.defineProperty(users, "name", {
  value: "Albin",
  writable: false,
  enumerable: false,
  configurable: true,
});

// users.name = "Arshad"; // no change

for (const key in users) {
  console.log(users[key]);
}

console.log(users);
