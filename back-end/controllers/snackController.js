const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require("../queries/snacks");
const { checkName, validateURL, confirmHealth } = require("../validations/checkSnacks.js");


// INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Show
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack) {
    res.json(snack);
  } else {
    res.status(404).json({ error: "not found" });
  }
});


//Create
snacks.post("/", checkName, confirmHealth, async (req, res) => {
  try {
    const snack = await createSnack(req.body);
    res.json(snack);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});


//Delete
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json(deletedSnack);
  } else {
    res.status(404).json("Snack not found");
  }
});

//Update
snacks.put("/:id", checkName, confirmHealth, async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const updatedSnack = await updateSnack(id, req.body);
  console.log(updatedSnack)
  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res.status(404).json({error: "Unable to update Snack"});
  }
})

module.exports = snacks;