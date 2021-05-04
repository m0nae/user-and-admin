const fs = require("fs");
const express = require("express");
const app = express();
const router = express.Router();

fs.readFile("./users.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Reading file failed:", err);
    return;
  }
  console.log("File data:", jsonString);
});

router.get("/", (req, res) => {
  res.send("users route");
});

router.post("/", (req, res) => {
  // push data to users.json
});

router.get("/:id", (req, res) => {
  res.send("users route with ID");
});

module.exports = router;
