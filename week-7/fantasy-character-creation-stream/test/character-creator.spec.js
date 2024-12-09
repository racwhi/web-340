/**
 * Author: Rachel White
 * Date: 12/8/2024
 * File Name: character-creator.spec.js
 * Description: fantasy game character character-creator.spec.js
 */
"use strict";
const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const testData = "Warrior, Male, He has a pet dragon";

    characterCreator.write(testData, (err) => {
      expect(err).toBeNull();
    });

    characterCreator.on("data", (data) => {
      expect(data.toString()).toBe(
        "You have created a Male Warrior. Fun fact: He has a pet dragon."
      );
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err).toEqual(new Error("Input data is empty"));
      done();
    });

    characterCreator.write("", () => {});
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const testData = "Mage, Female, She can cast lightning";
    characterCreator.write(testData, (err) => {
      expect(err).toBeNull();
    });

    characterCreator.on("data", (data) => {
      expect(data.toString()).toBe(
        "You have created a Female Mage. Fun fact: She can cast lightning."
      );
      done();
    });
  });
});
