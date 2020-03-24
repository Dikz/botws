"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = (bot) => {
    fs_1.default.readdir(path_1.default.resolve(__dirname, '..', 'commands'), (err, files) => {
        if (err)
            console.log(err);
        let cmdFiles = files.filter(f => f.split('.').pop() === 'js');
        if (cmdFiles.length <= 0) {
            console.log('🔴 Comandos não encontrados.');
            return;
        }
        cmdFiles.forEach((file, i) => {
            let props = require(path_1.default.resolve(__dirname, '..', 'commands', `${file}`));
            console.log(`📦 ${file} carregado!`);
            bot.commands.set(props.help.name, props);
        });
        console.log(`📦 Total de ${cmdFiles.length} comandos carregados com sucesso!`);
    });
};
