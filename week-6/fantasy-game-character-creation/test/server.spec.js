/**
 * Author: Rachel White
 * Date: 12/8/2024
 * File Name: server.spec.js
 * Description: fantasy game character creation app server.spec.js
 */

"use strict";
const http = require("http");
const server = require("../src/server");

// TODO: Implement your tests here
let currentCharacter = null;

const createRequestOptions = (path, method, query) => {
  return {
    hostname: "localhost",
    port: 3000,
    path: path + (query ? `?${new URLSearchParams(query)}` : ""),
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

describe("Character Creation API", () => {
  it("should create a character", (done) => {
    const options = createRequestOptions("/characters", "POST", {
      class: "Warrior",
      gender: "Male",
      funFact: "Loves to fight dragons",
    });

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(201);
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        currentCharacter = JSON.parse(data);
        expect(currentCharacter.class).toBe("Warrior");
        expect(currentCharacter.gender).toBe("Male");
        expect(currentCharacter.funFact).toBe("Loves to fight dragons");
        done();
      });
    });
    req.end();
  });

  it("should confirm character creation", (done) => {
    const options = createRequestOptions("/confirm", "POST");

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      res.on("data", (d) => {
        const confirmation = JSON.parse(d);
        expect(confirmation.message).toBe(
          "Character has been created successfully"
        );
        done();
      });
    });
    req.write(JSON.stringify(currentCharacter));
    req.end();
  });

  it("should return the created character", (done) => {
    const options = createRequestOptions("/characters", "GET");

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const character = JSON.parse(data);
        expect(character).toEqual(currentCharacter);
        done();
      });
    });
    req.end();
  });
});
