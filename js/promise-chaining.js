function fetchUsers() {
  return new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
      if (success) {
        resolve([
          { id: 1, name: "Albin" },
          { id: 2, name: "Aslam" },
          { id: 3, name: "Arshad" },
        ]);
      } else {
        reject("fetch users rejected");
      }
    }, 2000);
  });
}

function findUserTwo(users) {
  return new Promise((resolve, reject) => {
    console.log(users[1]);
    resolve("user data received");
  });
}

fetchUsers()
  .then(findUserTwo)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
