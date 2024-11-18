/**
 * Author: Rachel White
 * Date: 11/17/2024
 * File Name: taco.stand.spec.js
 * Description: taco stand spec js
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods
//test serve customer
function testServeCustomer() {
  const tacoStand = new TacoStandEmitter();
  let output = "";

  tacoStand.on("serve", (customer) => {
    output = `Taco Stand serves: ${customer}`;
  });

  try {
    tacoStand.serveCustomer("John");
    assert.strictEqual(output, "Taco Stand serves: John");
    console.log("Passed testServeCustomer");
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
  }
}

//test prepare taco
function testPrepareTaco() {
  const tacoStand = new TacoStandEmitter();
  let output = "";

  tacoStand.on("prepare", (taco) => {
    output = `Taco Stand prepares: ${taco} taco`;
  });

  try {
    tacoStand.prepareTaco("beef");
    assert.strictEqual(output, "Taco Stand prepares: beef taco");
    console.log("Passed testPrepareTaco");
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
  }
}

//test handle rush
function testHandleRush() {
  const tacoStand = new TacoStandEmitter();
  let output = "";

  tacoStand.on("rush", (rush) => {
    output = `Taco Stand handles rush: ${rush}`;
  });

  try {
    tacoStand.handleRush("lunch");
    assert.strictEqual(output, "Taco Stand handles rush: lunch");
    console.log("Passed testHandleRush");
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
  }
}

// Execute the tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
