const express = require("express");
const app = express();
require("dotenv").config();
const { User } = require("./models");

app.use(express.json());
// app.use(require("cors")());

const cors = require("cors");
app.use(cors());

// Sample route
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(3001, () => {
  console.log("Backend server is running on http://localhost:3001");
});
