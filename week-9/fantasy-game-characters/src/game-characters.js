/**
 * Author: Rachel White
 * Date: 12/22/2024
 * File Name:  game-characters.js
 * Description: fantasy game character  game-characters.js
 */
"use strict";

const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(script) {
    this.scriptPath = path.join(__dirname, script);
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);
    let data = "";
    let errorData = null;

    child.stdout.on("data", (chunk) => {
      data += chunk;
    });

    child.stderr.on("data", (chunk) => {
      errorData += chunk;
    });

    child.on("close", (code) => {
      if (code !== 0) {
        console.error(`Child process exited with code ${code}`);
        return callback(new Error(errorData));
      }
      try {
        const characters = JSON.parse(data);
        callback(null, characters);
      } catch (error) {
        callback(new Error("Failed to parse characters data."));
      }
    });
  }
}

module.exports = GameCharacters;