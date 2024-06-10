const fs = require("fs");

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

const txtOut = `This is a text added in avocado file: ${textInput}. \n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", txtOut);
console.log("File written");
