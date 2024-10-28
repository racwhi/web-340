/**
 * Author: Rachel White
 * Date: 10/27/2024
 * File Name: weight-converter.js
 * Description: Week 1 assignment for node.js
 */

"use strict";

// TODO: Implement the weight conversion logic here
// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
  return pounds * 0.453592; // 1 pound is approximately 0.453592 kg
}

// Get the command line arguments
const args = process.argv;

// Check for the number of arguments
if (args.length < 3) {
  console.error("Usage: node weight-converter.js <pounds>"); //display error message
  process.exit(1); //exit with non-zero error code
}

// Get the input value
const input = args[2];

const pounds = input;

// Check if the input is a number
if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

// Convert to kilograms and round to two decimal places
const kilograms = poundsToKilograms(pounds);
console.log(kilograms.toFixed(2));
