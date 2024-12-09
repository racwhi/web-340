/**
 * Author: Rachel White
 * Date: 12/8/2024
 * File Name: character-creator.js
 * Description: fantasy game character character-creator.js
 */
"use strict";
const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    // this.characterData = null;
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data = chunk.toString().trim();
    if (!data) {
      callback(new Error("Input data is empty"));
      return;
    }

    const [characterClass, gender, funFact] = data.split(",");
    if (!characterClass || !gender || !funFact) {
      callback(new Error("Invalid data format"));
      return;
    }

    const description = `You have created a ${gender.trim()} ${characterClass.trim()}. Fun fact: ${funFact.trim()}.`;
    this.queue.push(description);
    callback();
  }
  _read(size) {
    if (this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
