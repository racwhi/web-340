/**
 * Author: Rachel White
 * Date: 12/11/2024
 * File Name: character-creator.js
 * Description: fantasy game character character-creator.js
 */
"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require('fs').promises;
const path = require('path');

const writeFilePath = path.join(__dirname, '../characterData.json');
//async function createCharacter(classType, gender, funFact) {
 async function createCharacter(character) {
  // TODO: Implement this function
  try {
    let characters = [];
    characters.push(character);
    await fs.writeFile(writeFilePath, `${character}\n`, { encoding: "utf8" });
  } catch (error) {
    throw new Error("Write error");
  }
}

       


async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(writeFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Read error");
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
 module.exports = { createCharacter, getCharacters }; // For promises


