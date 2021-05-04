const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const port = 8080;

const usersRoute = require("./routes/users");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
