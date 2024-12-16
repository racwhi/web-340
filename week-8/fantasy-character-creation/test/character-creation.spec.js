/**
 * Author: Rachel White
 * Date: 12/11/2024
 * File Name: character-creator.spec.js
 * Description: fantasy game character character-creator.spec.js
 */
"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require("fs").promises;

const path = require("path");
const writeFilePath = path.join(__dirname, "../characterData.json");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    ({ createCharacter, getCharacters } = require("../src/character-creation"));
  });

  //Added for clean up
  afterAll(async () => {
    // Clean up the test file after all tests are done
    await fs.unlink(writeFilePath).catch((err) => {});
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  // 2. Test that getCharacters reads characters from the file
  // 3. Test that createCharacter handles errors when writing to the file
  test("createCharacter writes a new character to the file", async () => {
    const character = {
      class: "Warrior",
      gender: "Male",
      funFact: "Has a pet dragon.",
    };
    await createCharacter(character);

    const data = await fs.readFile(writeFilePath, "utf8");
    const characters = JSON.parse(data);

    expect(characters).toContainEqual(character);
  });

  test("getCharacters reads characters from the file", async () => {
    const character = {
      class: "Mage",
      gender: "Female",
      funFact: "Can control fire.",
    };
    await createCharacter(character);

    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });

  test("createCharacter handles errors when writing to the file", async () => {
    jest
      .spyOn(fs, "writeFile")
      .mockImplementationOnce(() => Promise.reject(new Error("Write error")));

    await expect(createCharacter({})).rejects.toThrow("Write error");
  });
});
