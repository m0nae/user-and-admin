const fs = require("fs");
let users = [];

fs.readFile("./users.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Reading file failed:", err);
    return;
  }

  try {
    users = JSON.parse(jsonString);
  } catch (err) {
    throw Error("Error parsing JSON:", err);
  }
  // console.log("File data:", jsonString);
});

const UsersService = {
  getAll: () => {
    return users;
  },

  getById: (id) => {
    const foundUser = users.find((user) => {
      return user.id == id;
    });
    return foundUser;
  },

  createUser: (newUser) => {
    const fileContents = JSON.stringify([...users, newUser]);

    fs.writeFile("./users.json", fileContents, "utf-8", (err) => {
      if (err) {
        console.log("Writing file failed:", err);
        return;
      }
    });

    return newUser;
  },

  updateUser: (info) => {
    // todo: write user changes to users.json file
  },

  deleteUser: (id) => {
    const newUsers = users.filter((user) => user.id != id);
    const fileContents = [...newUsers];

    fs.writeFile("./users.json", fileContents, "utf-8", (err) => {
      if (err) {
        console.log("Writing file failed:", err);
        return;
      }
    });
  },
};

module.exports = UsersService;
