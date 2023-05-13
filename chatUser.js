"use strict";

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
  inputString += chunk;
});
process.stdin.on("end", function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

class User {
  constructor(userName) {
    this.username = userName;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }
}

class ChatUser extends User {
  constructor(userName) {
    super(userName);
    this.warningCount = 0;
  }

  giveWarning() {
    this.warningCount++;
  }

  getWarningCount() {
    return this.warningCount;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const username = readLine().trim();
  const chatUser = new ChatUser(username);

  chatUser.giveWarning();
  chatUser.giveWarning();

  ws.write(`Username: ${chatUser.getUsername()}\n`);
  ws.write(`Warning Count: ${chatUser.getWarningCount()}\n`);

  ws.end();
}
