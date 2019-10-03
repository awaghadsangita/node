"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function getString() {
    return readline.question();
}
exports.getString = getString;
function getNumber() {
    return readline.questionInt();
}
exports.getNumber = getNumber;
