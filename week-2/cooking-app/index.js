/**
 * Author: Rachel White
 * Date: 11/3/2024
 * File Name: index.js
 * Description: Index javascript file for cooking-app
 */

"use strict";

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes");

//TODO: Implement your CLI program here
// ingredients array
const ingredients = ["ingredient1", "ingredient2"];
console.log(createRecipe(ingredients)); //output ingredients

const timerMinutes = 15;
console.log(setTimer(timerMinutes)); //output timer

console.log(quit()); //  Program exited
