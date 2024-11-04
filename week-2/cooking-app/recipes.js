/**
 * Author: Rachel White
 * Date: 11/3/2024
 * File Name: recipes.js
 * Description: Recipes javascript file for cooking-app
 */
"use strict";

// Define the createRecipe function
function createRecipe(ingredients) {
  //TODO: Implement this function
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(timerMinutes) {
  //TODO: Implement this function

  return `Timer set for ${timerMinutes} minutes.`;
}

// Define the quit function
function quit() {
  //TODO: Implement this function

  return "Program exited.";
}

//TODO: Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit,
};
