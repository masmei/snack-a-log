// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const snacksController = require("./controllers/snackController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snacksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Snacks App");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });


// EXPORT
module.exports = app;