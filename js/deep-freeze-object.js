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
};

deepFreeze(user);

user.address.city = "Mumbai";

console.log(user.address.city);
