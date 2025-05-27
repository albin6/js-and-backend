function Person(name, age) {
  this.name = name;
  this.age = age;
}

const userOne = new Person("Albin", 21);

for (const key in userOne) {
  console.log(userOne[key]);
}
