function regularSample() {
  console.log("Regular function sample", arguments);
}

const arrowSample = () => {
  console.log("Arrow function sample");
};

regularSample(1, 2, 3);

// this bindind
// arguments object
// constructor usage
// hoisting
