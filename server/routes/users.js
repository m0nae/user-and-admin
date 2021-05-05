const fs = require("fs");
const express = require("express");
const app = express();
const router = express.Router();

const UsersService = require("../services/usersService");

router.get("/", (req, res) => {
  const users = UsersService.getAll();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  let user = UsersService.getById(req.params.id);
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).send("User Not Found");
  }
});

router.post("/", (req, res) => {
  // todo: replace this with actual form data in the frontend
  console.log(req.body);
  const user = UsersService.createUser({
    id: Math.floor(Math.random() * 10000),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    state: "pending",
  });

  res.status(200).json(user);
});

router.put("/:id", (req, res) => {
  // todo: replace with real form data in frontend
  let user = UsersService.getById(req.params.id);

  if (user) {
    const key = "firstName";
    const value = "John";

    user = {
      ...user,
      [key]: value,
    };

    // todo: send "user" back to the UsersService and write the updates to the users.json file
    console.log(user);
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found");
  }
});

router.delete("/:id", (req, res) => {
  UsersService.deleteUser(req.params.id);
  res.status(204).send();
});

module.exports = router;
