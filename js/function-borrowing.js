// Function borrowing is a technique where an object uses a method (usually from another object) as if it were its own.

const user = {
  firstName: "Albin",
  lastName: "Aji",
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const guest = {
  firstName: "Swathy",
  lastName: "RK",
};

user.fullName();

user.fullName.call(guest);
