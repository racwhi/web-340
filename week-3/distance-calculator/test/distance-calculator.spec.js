/**
 * Author: Rachel White
 * Date: 11/10/2024
 * File Name: distance-calculator.specs.js
 * Description: planets distance-calculator.specs.js
 */
"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testUranusToVenus() {
  // Test the distance from Uranus to Venus
  try {
    const expectedValue = 18.5; // 19.22 - 0.72
    assert.strictEqual(calculateDistance("Uranus", "Venus"), expectedValue);
    return true;
  } catch (error) {
    console.error(`Failed testUranusToVenus: ${error.message}`);
    return false;
  }
}

function testEarthToMars() {
  // Test the distance from Earth to Mars
  try {
    const expectedValue = 0.52; // 1.52 - 1.0
    assert.strictEqual(calculateDistance("Earth", "Mars"), expectedValue);
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testNeptuneToJupiter() {
  // Test the distance from Saturn to Jupiter
  try {
    const expectedValue = 24.86; // 30.06 - 5.2
    assert.strictEqual(calculateDistance("Neptune", "Jupiter"), expectedValue);
    return true;
  } catch (error) {
    console.error(`Failed testNeptuneToJupiter: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testUranusToVenus();
testEarthToMars();
testNeptuneToJupiter();
