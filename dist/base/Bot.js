"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sulla_hotfix_1 = require("sulla-hotfix");
class Bot extends sulla_hotfix_1.Whatsapp {
    constructor(page) {
        super(page);
        this.commands = new Map();
    }
}
exports.default = Bot;
