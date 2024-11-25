/**
 * Author: Rachel White
 * Date: 11/24/2024
 * File Name: pie.spec.js
 * Description:pie baker app pie.spec.js
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe("bakePie", () => {
  const exit = jest.spyOn(process, "exit").mockImplementation((code) => code);

  let warn;
  beforeEach(() => {
    warn = jest.spyOn(console, "warn");
  });

  afterEach(() => {
    warn.mockRestore();
  });

  test("successfully bakes a pie when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("Successfully baked a apple pie!");
    expect(warn).not.toHaveBeenCalled(); // no warning
    expect(exit).not.toHaveBeenCalled(); // exit not called
  });

  test("logs a warning and exits when essential ingredients are missing", () => {
    const result = bakePie("cherry", ["flour", "sugar"]);
    expect(warn).toHaveBeenCalledWith("Missing essential ingredients: butter");
    expect(exit).toHaveBeenCalledWith(1); // exit with code 1
  });

  test("logs a warning and exits for multiple missing ingredients", () => {
    const result = bakePie("blueberry", []);
    expect(warn).toHaveBeenCalledWith(
      "Missing essential ingredients: flour, sugar, butter"
    );
    expect(exit).toHaveBeenCalledWith(1); // exit with code 1
  });
});
