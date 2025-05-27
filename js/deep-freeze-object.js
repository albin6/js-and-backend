function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    if (
      typeof obj[key] == "object" &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}

const user = {
  name: "Alice",
  address: {
    city: "Paris",
  },
  hobbies: [1, 2, 3, [4, 5]],
};

deepFreeze(user);

user.address.city = "Mumbai";

console.log(user.address.city);

user.hobbies[3] = [8];

console.log(user);
