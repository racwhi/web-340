/**
 * Author: Rachel White
 * Date: 12/8/2024
 * File Name: server.js
 * Description: fantasy game character creation app server.js
 */
"use strict";
const http = require("http");
const url = require("url");

let currentCharacter = null;

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);

  if (req.method === "POST" && parsedUrl.pathname === "/characters") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      currentCharacter = JSON.parse(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(currentCharacter));
    });
  } else if (req.method === "POST" && parsedUrl.pathname === "/confirm") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Character has been created successfully" })
    );
  } else if (req.method === "GET" && parsedUrl.pathname === "/characters") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(currentCharacter));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
