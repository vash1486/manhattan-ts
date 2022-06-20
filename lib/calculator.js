"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.x = 0;
        this.y = 0;
        this.direction = 90; // default: est
    }
    Calculator.prototype.moveNorth = function (units) {
        this.y += units;
    };
    Calculator.prototype.moveSouth = function (units) {
        this.y -= units;
    };
    Calculator.prototype.moveEast = function (units) {
        this.x += units;
    };
    Calculator.prototype.moveOvest = function (units) {
        this.x -= units;
    };
    Calculator.prototype.turnRight = function (degree) {
        this.direction = this.mod(this.direction + degree);
    };
    Calculator.prototype.turnLeft = function (degree) {
        this.direction = this.mod(this.direction - degree);
    };
    Calculator.prototype.mod = function (n) {
        // fix js negative module.
        return ((n % 360) + 360) % 360;
    };
    Calculator.prototype.moveForward = function (units) {
        this.x += units * Math.sin((this.direction * Math.PI) / 180);
        this.y += units * Math.cos((this.direction * Math.PI) / 180);
    };
    Calculator.prototype.splitInstruction = function (instruction) {
        return {
            instruction: instruction.substring(0, 1),
            units: parseInt(instruction.substring(1))
        };
    };
    Calculator.prototype.handleInstruction = function (instruction) {
        var splitted = this.splitInstruction(instruction);
        switch (splitted.instruction) {
            case "N":
                this.moveNorth(splitted.units);
                break;
            case "S":
                this.moveSouth(splitted.units);
                break;
            case "O":
                this.moveOvest(splitted.units);
                break;
            case "E":
                this.moveEast(splitted.units);
                break;
            case "L":
                this.turnLeft(splitted.units);
                break;
            case "R":
                this.turnRight(splitted.units);
                break;
            case "F":
                this.moveForward(splitted.units);
                break;
        }
    };
    Calculator.prototype.handleInstructions = function (instructions) {
        var _this = this;
        instructions.forEach(function (instruction) { return _this.handleInstruction(instruction); });
    };
    Calculator.prototype.getManhattan = function () {
        return Math.abs(this.x) + Math.abs(this.y);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
