/**
 * Author: Rachel White
 * Date: 11/10/2024
 * File Name: distance-calculator.js
 * Description: planets distance-calculator.js
 */
"use strict";

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  const distances = {
    "Mercury": 0.39,
    "Venus": 0.72,
    "Earth": 1.0,
    "Mars": 1.52,
    "Jupiter": 5.2,
    "Saturn": 9.54,
    "Uranus": 19.22,
    "Neptune": 30.06,
  };
  if (!distances[planet1] || !distances[planet2]) {
    throw new Error("The planet is invalid");
  }
  return Math.abs(distances[planet1] - distances[planet2]);
}



module.exports = calculateDistance;
