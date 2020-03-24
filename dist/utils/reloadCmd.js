"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = (bot, command) => {
    delete require.cache[require.resolve(path_1.default.resolve(__dirname, '..', 'commands', `${command}`))];
    let props = require(path_1.default.resolve(__dirname, '..', 'commands', `${command}`));
    console.log(`Comando: ${command} regarregado!`);
    bot.commands.set(command, props);
};
