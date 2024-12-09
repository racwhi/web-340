/**
 * Author: Rachel White
 * Date: 11/24/2024
 * File Name: pie.js
 * Description:pie baker app pie.js
 */
"use strict";

const essentialIngredients = ["flour", "sugar", "butter"];

function bakePie(type, ingredients) {
  const missingIngredients = essentialIngredients.filter(
    (ingredient) => !ingredients.includes(ingredient)
  );

  if (missingIngredients.length > 0) {
    console.warn(
      `Missing essential ingredients: ${missingIngredients.join(", ")}`
    );
    process.exit(1);
  }

  return `Successfully baked a ${type} pie!`;
}

module.exports = { bakePie };
