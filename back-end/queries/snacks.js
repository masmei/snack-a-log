const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

const createSnack = async (snack) => {
    try {
      const newSnack = await db.one(
        "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [snack.name, snack.fiber, snack.protein, snack.added_sugar, snack.is_healthy, snack.image]
      );
      return newSnack;
    } catch (error) {
      return error;
    }
  };

module.exports = { getAllSnacks, getSnack, createSnack };
