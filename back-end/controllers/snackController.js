const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");
const { checkName, validateURL } = require("../validations/checkSnacks.js");
const confirmHealth = require("../confirmHealth");

// INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Show
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.json({ payload: snack, success: true });
  } else {
    res.status(404).json({ payload: "not found", success: false });
  }
});

//Create
snacks.post("/", checkName, async (req, res) => {
  let { name, fiber, protein, added_sugar, image } = req.body;
  try {
    isHealthy = confirmHealth(req.body);
    const snack = await createSnack(
      name,
      fiber,
      protein,
      added_sugar,
      isHealthy,
      image
    );
    res.json({ payload: snack, success: true });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//Delete
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json({ payload: deletedSnack, success: true });
  } else {
    res.status(404).json({ payload: "Snack not found", success: false });
  }
});

//Update
snacks.put("/:id", checkName, async (req, res) => {
  let { name, fiber, protein, added_sugar, image } = req.body;
  isHealthy = confirmHealth(req.body);
  const { id } = req.params;
  const updatedSnack = await updateSnack(id, name,
    fiber,
    protein,
    added_sugar,
    isHealthy,
    image);
  if (updatedSnack.id) {
    res.status(200).json({ payload: updatedSnack, success: true });
  } else {
    res.status(422).json({ payload: "Unable to update snack", success: false });
  }
});

module.exports = snacks;
