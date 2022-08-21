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

const createSnack = async (name, fiber, protein, added_sugar, isHealthy, image) => {
  let lowercaseName = name.toLowerCase().split(" ")
  let snackName = lowercaseName.map((word) => {
    if(word.length > 2){
      return word.charAt(0).toUpperCase() + word.substring(1)
    } else {
      return word
    }
  }).join(" ");
  
  if(!image){
    image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
  }


  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        snackName,
        fiber,
        protein,
        added_sugar,
        isHealthy,
        image,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id = $1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, name, fiber, protein, added_sugar, isHealthy, image) => {
  let lowercaseName = name.toLowerCase().split(" ")
  let snackName = lowercaseName.map((word) => {
    if(word.length > 2){
      return word.charAt(0).toUpperCase() + word.substring(1)
    } else {
      return word
    }
  }).join(" ");
  
  if(!image){
    image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
  }

  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 where id=$7 RETURNING *",
      [
        snackName,
        fiber,
        protein,
        added_sugar,
        isHealthy,
        image,
        id,
      ]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
