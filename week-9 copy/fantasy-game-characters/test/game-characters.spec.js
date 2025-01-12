/**
 * Author: Rachel White
 * Date: 12/22/2024
 * File Name: game-characters.spec.js
 * Description: fantasy game character game-characters.spec.js
 */
//"use strict";

// game-characters.spec.js
const GameCharacters = require("../src/game-characters"); // Verify the path

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class: "Warrior", gender: "Male", funFact: "Loves to fight dragons" },
        { class: "Mage", gender: "Female", funFact: "Master of illusions" },
        { class: "Rogue", gender: "Other", funFact: "Expert in stealth" },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const invalidGameCharacters = new GameCharacters("nonexistent-script.js");
    invalidGameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const failingGameCharacters = new GameCharacters("failing-script.js");
    failingGameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});
