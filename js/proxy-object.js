const user = {
  name: "Albin",
  age: 21,
};

const proxy = new Proxy(user, {
  set(target, prop, value) {
    if (prop == "age" && typeof value !== "number") {
      throw new Error("age should be number");
    }
    target[prop] = value;
    return true;
  },
  get(target, prop) {
    if (prop == "age") {
      console.log(`age is not disclossable`);
    }
    return target[prop];
  },
});
