const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3000;

const usersRoute = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
