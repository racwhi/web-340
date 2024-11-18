/**
 * Author: Rachel White
 * Date: 11/17/2024
 * File Name: index.js
 * Description: Index for taco stand
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("../src/taco-stand");
/*const TacoStandEmitter = require("./tacoStand");*/

const tacoStand = new TacoStandEmitter();

// Function to serve a customer
function serveCustomer(customer) {
  tacoStand.serveCustomer(customer);
  console.log(`Taco Stand serves: ${customer}`);
}

// Function to prepare a taco
function prepareTaco(taco) {
  tacoStand.prepareTaco(taco);
  console.log(`Taco Stand prepares: ${taco} taco`);
}

// Function to handle a rush
function handleRush(rush) {
  tacoStand.handleRush(rush);
  console.log(`Taco Stand handles rush: ${rush}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  if (command === "serve") {
    serveCustomer(args.join(" "));
  } else if (command === "prepare") {
    prepareTaco(args.join(" "));
  } else if (command === "rush") {
    handleRush(args.join(" "));
  } else {
    console.log("Unknown command");
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
