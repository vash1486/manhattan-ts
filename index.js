"use strict";
exports.__esModule = true;
var calculator_1 = require("./lib/calculator");
var fs_1 = require("fs");
var instructions = (0, fs_1.readFileSync)('./instructions').toString();
var c = new calculator_1.Calculator();
c.handleInstructions(instructions.split(/\n/));
console.log("Current Manhattan is ".concat(c.getManhattan()));
